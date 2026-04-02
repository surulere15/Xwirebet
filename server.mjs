import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3006; 

// ── Security Middleware ─────────────────────────
app.use(helmet({
  referrerPolicy: { policy: 'no-referrer' },
}));
app.use(cors({
  origin: [process.env.ALLOWED_ORIGIN || 'http://localhost:5173', 'http://localhost:3005'],
  methods: ['POST', 'GET'],
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── Rate Limiting ──────────────────────────────
const offerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many submissions. Please try again later.' },
});

// ── Serve static files (built Vite app) ────────
app.use(express.static(path.join(__dirname, 'dist')));

// ── Helpers ────────────────────────────────────
function escape(str) {
  if (!str) return '';
  return sanitizeHtml(str, { allowedTags: [], allowedAttributes: {} });
}

function validateEnv() {
  const required = ['SMTP_USER', 'SMTP_PASS', 'FOUNDER_EMAIL'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(`Missing required env vars: ${missing.join(', ')}`);
    process.exit(1);
  }
}

import https from 'https';

async function sendTelegramNotification(data) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

  const text = `🚀 *New Wirebet Offer*
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'N/A'}
💰 *Amount:* ${data.offer_amount}
🏢 *Type:* ${data.buyer_type}
🗓️ *Timeline:* ${data.timeline}

💬 *Message:*
${data.message || 'No message provided.'}`;

  const payload = JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text: text,
    parse_mode: 'Markdown',
  });

  const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
    },
    timeout: 5000,
    rejectUnauthorized: false, // Bypass local SSL inspection issues
  };

  const req = https.request(options, (res) => {
    let responseBody = '';
    res.on('data', (chunk) => responseBody += chunk);
    res.on('end', () => {
      try {
        const result = JSON.parse(responseBody);
        if (!result.ok) console.error('Telegram Error:', result.description);
        else console.log('✅ Telegram Notification Sent successfully.');
      } catch (e) {
        console.error('Telegram Parse Error:', e.message);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Telegram Network Error (https):', error.message);
  });

  req.write(payload);
  req.end();
}

// ── Form Submission Endpoint ───────────────────
app.post('/api/submit-offer', offerLimiter, async (req, res) => {
  const { name, email, phone, offer_amount, buyer_type, timeline, message } = req.body;

  if (!name || !email || !offer_amount) {
    return res.status(400).json({ error: 'Name, email, and offer amount are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const amountRegex = /^[\$]?[\d,]+(?:\.\d{1,2})?$/;
  if (!amountRegex.test(offer_amount.trim())) {
    return res.status(400).json({ error: 'Invalid offer amount format.' });
  }

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safePhone = escape(phone);
  const safeAmount = escape(offer_amount);
  const safeMessage = escape(message);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const buyerTypeLabels = {
      operator: 'Operator',
      investor: 'Investor',
      strategic: 'Strategic Acquirer',
      broker: 'Broker / Advisor',
    };

    const timelineLabels = {
      immediate: 'Immediate',
      '30days': 'Within 30 days',
      '60days': '60+ days',
    };

    const safeBuyerType = escape(buyerTypeLabels[buyer_type] || buyer_type || 'Not specified');
    const safeTimeline = escape(timelineLabels[timeline] || timeline || 'Not specified');

    // ── Send Telegram Notification (Prioritized) ──
    const telegramPayload = {
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      offer_amount: safeAmount,
      buyer_type: safeBuyerType,
      timeline: safeTimeline,
      message: safeMessage
    };
    sendTelegramNotification(telegramPayload);

    // ── Send Email Notifications (Graceful) ──────
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false // Handle cert issues locally
        }
      });

      await transporter.sendMail({
        from: `"Wirebet Offers" <${process.env.SMTP_USER}>`,
        to: process.env.FOUNDER_EMAIL,
        subject: `New Wirebet Offer: ${safeAmount} from ${safeName}`,
        html: `
          <div style="font-family: -apple-system, 'Helvetica Neue', sans-serif; max-width: 580px; margin: 0 auto; background: #030303; color: #a1a1aa; padding: 40px;">
            <h1 style="color: #fff; letter-spacing: 0.3em; font-size: 1.5em; text-align: center; margin-bottom: 0.5em;">WIREBET</h1>
            <p style="color: #71717a; text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2em;">New Acquisition Offer</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; text-align: right;">${safeName}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${safeEmail}</td></tr>
              ${safePhone ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${safePhone}</td></tr>` : ''}
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Offer</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #4ade80; text-align: right; font-size: 16px; font-weight: 500;">${safeAmount}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Buyer Type</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${safeBuyerType}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Timeline</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${safeTimeline}</td></tr>
            </table>
            ${safeMessage ? `<div style="margin-top: 2em; padding: 16px; background: #0a0a0a; border-left: 1px solid #2a2a2a;"><p style="color: #52525b; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Message</p><p style="color: #d4d4d8; font-size: 13px; line-height: 1.7;">${safeMessage}</p></div>` : ''}
            <p style="text-align: center; color: #3f3f46; font-size: 10px; margin-top: 3em; letter-spacing: 0.2em; text-transform: uppercase;">Wirebet.com &middot; Domain Sale</p>
          </div>
        `,
      });

      await transporter.sendMail({
        from: `"Wirebet" <${process.env.SMTP_USER}>`,
        to: safeEmail,
        subject: 'Wirebet — Offer Received',
        html: `
          <div style="font-family: -apple-system, 'Helvetica Neue', sans-serif; max-width: 580px; margin: 0 auto; background: #030303; color: #a1a1aa; padding: 40px;">
            <h1 style="color: #fff; letter-spacing: 0.3em; font-size: 1.5em; text-align: center; margin-bottom: 0.5em;">WIREBET</h1>
            <p style="color: #71717a; text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2em;">Offer Received</p>
            <p style="color: #d4d4d8; line-height: 1.8;">Hi ${safeName},</p>
            <p style="color: #a1a1aa; line-height: 1.8;">Thank you for your interest in acquiring <strong style="color: #fff;">wirebet.com</strong>.</p>
            <p style="color: #a1a1aa; line-height: 1.8;">Your offer of <strong style="color: #4ade80;">${safeAmount}</strong> has been received and will be reviewed by the founder.</p>
            <p style="color: #a1a1aa; line-height: 1.8;">If qualified, you'll receive the full strategic acquisition brief, valuation narrative, and market thesis within 24 hours.</p>
            <p style="text-align: center; color: #3f3f46; font-size: 10px; margin-top: 3em; letter-spacing: 0.2em; text-transform: uppercase;">Wirebet.com</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.warn('Email Dispatch Failed (SMTP connectivity issue), but Telegram was prioritized.', emailError.message);
    }

    res.json({ success: true, message: 'Offer submitted successfully.' });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ error: 'Failed to submit offer. Please try again later.' });
  }
});

// ── Health check ───────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ── SPA fallback ───────────────────────────────
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ── Start ──────────────────────────────────────
validateEnv();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Wirebet server running on port ${PORT}`);
});
