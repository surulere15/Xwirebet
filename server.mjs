import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (built Vite app)
app.use(express.static(path.join(__dirname, 'dist')));

// ── Form Submission Endpoint ───────────────────
app.post('/api/submit-offer', async (req, res) => {
  const { name, email, offer_amount, buyer_type, timeline, message } = req.body;

  // Validation
  if (!name || !email || !offer_amount) {
    return res.status(400).json({ error: 'Name, email, and offer amount are required.' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // SMTP transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'REDACTED_EMAIL',
        pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD,
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

    // Email to founder
    await transporter.sendMail({
      from: `"Wirebet Offers" <${process.env.SMTP_USER || 'REDACTED_EMAIL'}>`,
      to: process.env.FOUNDER_EMAIL || 'REDACTED_EMAIL',
      subject: `💰 New Wirebet Offer: ${offer_amount} from ${name}`,
      html: `
        <div style="font-family: -apple-system, 'Helvetica Neue', sans-serif; max-width: 580px; margin: 0 auto; background: #030303; color: #a1a1aa; padding: 40px;">
          <h1 style="color: #fff; letter-spacing: 0.3em; font-size: 1.5em; text-align: center; margin-bottom: 0.5em;">WIREBET</h1>
          <p style="color: #71717a; text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2em;">New Acquisition Offer</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #fff; text-align: right;">${name}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${email}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Offer</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #4ade80; text-align: right; font-size: 16px; font-weight: 500;">${offer_amount}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Buyer Type</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${buyerTypeLabels[buyer_type] || buyer_type || 'Not specified'}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #52525b; font-size: 12px;">Timeline</td><td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a; color: #d4d4d8; text-align: right;">${timelineLabels[timeline] || timeline || 'Not specified'}</td></tr>
          </table>
          
          ${message ? `<div style="margin-top: 2em; padding: 16px; background: #0a0a0a; border-left: 1px solid #2a2a2a;"><p style="color: #52525b; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Message</p><p style="color: #d4d4d8; font-size: 13px; line-height: 1.7;">${message}</p></div>` : ''}
          
          <p style="text-align: center; color: #3f3f46; font-size: 10px; margin-top: 3em; letter-spacing: 0.2em; text-transform: uppercase;">Wirebet.com · Domain Sale</p>
        </div>
      `,
    });

    // Auto-reply to buyer
    await transporter.sendMail({
      from: `"Wirebet" <${process.env.SMTP_USER || 'REDACTED_EMAIL'}>`,
      to: email,
      subject: 'Wirebet — Offer Received',
      html: `
        <div style="font-family: -apple-system, 'Helvetica Neue', sans-serif; max-width: 580px; margin: 0 auto; background: #030303; color: #a1a1aa; padding: 40px;">
          <h1 style="color: #fff; letter-spacing: 0.3em; font-size: 1.5em; text-align: center; margin-bottom: 0.5em;">WIREBET</h1>
          <p style="color: #71717a; text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2em;">Offer Received</p>
          
          <p style="color: #d4d4d8; line-height: 1.8;">Hi ${name},</p>
          <p style="color: #a1a1aa; line-height: 1.8;">Thank you for your interest in acquiring <strong style="color: #fff;">wirebet.com</strong>.</p>
          <p style="color: #a1a1aa; line-height: 1.8;">Your offer of <strong style="color: #4ade80;">${offer_amount}</strong> has been received and will be reviewed by the founder.</p>
          <p style="color: #a1a1aa; line-height: 1.8;">If qualified, you'll receive the full strategic acquisition brief, valuation narrative, and market thesis within 24 hours.</p>
          
          <p style="text-align: center; color: #3f3f46; font-size: 10px; margin-top: 3em; letter-spacing: 0.2em; text-transform: uppercase;">Wirebet.com</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Offer submitted successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to submit offer. Please try again or email founder@wirebet.com directly.' });
  }
});

// ── Health check ───────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── SPA fallback ───────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Wirebet server running on port ${PORT}`);
});
