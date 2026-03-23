<style>
  /* WIREBET UNIFIED DESIGN SYSTEM — v1.1 */
  /* Matrix variant: landscape, table-centric */
  @page { size: A4 landscape; margin: 0; }
  html, body {
    background-color: #030303;
    color: #a1a1aa;
    font-family: 'Helvetica Neue', 'Inter', -apple-system, sans-serif;
    line-height: 1.85;
    font-size: 11px;
    font-weight: 300;
    margin: 0; padding: 0;
  }
  .doc-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 3em 4.5em;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .header-block {
    text-align: center;
    border-bottom: 1px solid #151515;
    padding-bottom: 3.5em;
    margin-bottom: 4.5em;
  }
  h1 { letter-spacing: 0.5em; font-size: 2.2em; margin: 0 0 0.6em 0; color: #ffffff; font-weight: 400; text-transform: uppercase; }
  .subtitle { letter-spacing: 0.3em; font-size: 0.75em; text-transform: uppercase; color: #71717a; margin-bottom: 2em; }
  .bottom-line { font-size: 0.55em; text-transform: uppercase; letter-spacing: 0.45em; color: #3f3f46; font-weight: 500; }

  .section-title {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.3em;
    margin-bottom: 2em;
    border-left: 1px solid #2a2a2a;
    padding-left: 1.5em;
  }
  .intro-text { color: #888; padding-left: 1.3em; margin-bottom: 4.5em; max-width: 600px; letter-spacing: 0.02em; }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 5em;
    border-top: 1px solid #151515;
  }
  th {
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.65em;
    font-weight: 500;
    color: #52525b;
    padding: 2em 1.5em 1.5em 1.5em;
    border-bottom: 1px solid #151515;
  }
  td {
    padding: 2em 1.5em;
    border-bottom: 1px solid #0d0d0d;
    color: #a1a1aa;
    vertical-align: top;
    line-height: 1.7;
  }

  .col-priority { color: #52525b; font-weight: 500; width: 4%; text-align: center; }
  .col-type { width: 14%; color: #71717a; font-size: 0.9em; }
  .col-target { width: 12%; color: #ffffff; font-weight: 400; letter-spacing: 0.05em; }
  .col-pitch { width: 26%; }
  .col-role { width: 14%; color: #71717a; font-size: 0.9em; }
  .col-status { width: 12%; }
  .col-step { width: 18%; color: #a1a1aa; }

  .status-badge {
    display: inline-block;
    border: 1px solid #151515;
    background-color: transparent;
    padding: 0.4em 0.8em;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #a1a1aa;
    border-radius: 0;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8em;
    padding-top: 3em;
    border-top: 1px solid #151515;
  }

  ul { padding-left: 0; margin-top: 1em; margin-bottom: 0; list-style-type: none; }
  li { margin-bottom: 1em; line-height: 1.8; position: relative; padding-left: 1.5em; color: #a1a1aa; }
  li::before { content: ""; position: absolute; left: 0; top: 0.85em; width: 0.5em; height: 1px; background-color: #333; }
</style>

<div class="doc-container">

  <!-- HEADER -->
  <div class="header-block">
    <h1>WIREBET</h1>
    <div class="subtitle">Buyer Outreach Matrix</div>
    <div class="subtitle" style="font-size: 0.6em; margin-top: -1.5em;">Strategic Buyer Targeting Overview</div>
    <div class="bottom-line">Private working document</div>
  </div>

  <!-- SECTION 1 -->
  <div class="section-title">Section 1 — Intro Line</div>
  <div class="intro-text">
    This matrix prioritizes high-fit buyer categories and named targets aligned with the Wirebet prediction-markets thesis.
  </div>

  <!-- SECTION 2 -->
  <div class="section-title">Section 2 — Matrix Table</div>
  <table>
    <thead>
      <tr>
        <th style="text-align: center;">Priority</th>
        <th>Target Type</th>
        <th>Target</th>
        <th>Pitch Angle</th>
        <th>Best Contact Role</th>
        <th>Status</th>
        <th>Next Step</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-priority">01</td>
        <td class="col-type">Prediction market platform</td>
        <td class="col-target">Polymarket</td>
        <td class="col-pitch">Premium adjacent brand for fast crypto-native event markets</td>
        <td class="col-role">Founder / Biz Dev / Strategy</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Identify direct contact and send teaser</td>
      </tr>
      <tr>
        <td class="col-priority">02</td>
        <td class="col-type">Regulated event-market platform</td>
        <td class="col-target">Kalshi</td>
        <td class="col-pitch">Consumer-facing or future expansion brand for event-market products</td>
        <td class="col-role">Founder / Strategy / Corp Dev</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Identify direct contact and send teaser</td>
      </tr>
      <tr>
        <td class="col-priority">03</td>
        <td class="col-type">Forecasting / market-intelligence platform</td>
        <td class="col-target">Metaculus</td>
        <td class="col-pitch">Commercial-facing brand extension into market-backed participation products</td>
        <td class="col-role">Founder / Partnerships</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Identify strategic fit and send tailored note</td>
      </tr>
      <tr>
        <td class="col-priority">04</td>
        <td class="col-type">Prediction market / social market platform</td>
        <td class="col-target">Manifold</td>
        <td class="col-pitch">Premium market-facing brand layer for expansion or repositioning</td>
        <td class="col-role">Founder / Partnerships</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Send teaser with prediction-market framing</td>
      </tr>
      <tr>
        <td class="col-priority">05</td>
        <td class="col-type">Crypto sportsbook operator</td>
        <td class="col-target">Cloudbet</td>
        <td class="col-pitch">Future-facing brand to expand from sportsbook language into event markets</td>
        <td class="col-role">Founder / Growth / Brand</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Send teaser with premium event-market angle</td>
      </tr>
      <tr>
        <td class="col-priority">06</td>
        <td class="col-type">UAE / Dubai crypto founder</td>
        <td class="col-target">DMCC ecosystem target 1</td>
        <td class="col-pitch">Launch-ready premium brand for event markets or crypto-native forecasting products</td>
        <td class="col-role">Founder / CEO</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Build UAE target list</td>
      </tr>
      <tr>
        <td class="col-priority">07</td>
        <td class="col-type">UAE / Dubai crypto founder</td>
        <td class="col-target">DMCC ecosystem target 2</td>
        <td class="col-pitch">Strategic hold or launch brand for future-facing market products</td>
        <td class="col-role">Founder / CEO</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Build UAE target list</td>
      </tr>
      <tr>
        <td class="col-priority">08</td>
        <td class="col-type">UAE / Dubai Web3 operator</td>
        <td class="col-target">DMCC ecosystem target 3</td>
        <td class="col-pitch">Market-facing premium identity for a crypto-native consumer product</td>
        <td class="col-role">Founder / Strategy</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Build UAE target list</td>
      </tr>
      <tr>
        <td class="col-priority">09</td>
        <td class="col-type">Crypto wagering operator</td>
        <td class="col-target">Sportsbet.io / similar</td>
        <td class="col-pitch">Premium sub-brand for prediction / event-market expansion</td>
        <td class="col-role">Founder / Brand / Corp Dev</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Find best-fit contact</td>
      </tr>
      <tr>
        <td class="col-priority">10</td>
        <td class="col-type">Strategic acquirer</td>
        <td class="col-target">Web3 infrastructure brand</td>
        <td class="col-pitch">Strong consumer-facing naming layer for market or liquidity products</td>
        <td class="col-role">Founder / Strategy</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Curate shortlist</td>
      </tr>
      <tr>
        <td class="col-priority">11</td>
        <td class="col-type">Strategic acquirer</td>
        <td class="col-target">AI + forecasting product</td>
        <td class="col-pitch">Sharper public-facing brand for event-market or signal product launch</td>
        <td class="col-role">Founder / CEO</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Curate shortlist</td>
      </tr>
      <tr>
        <td class="col-priority">12</td>
        <td class="col-type">Strategic acquirer</td>
        <td class="col-target">Crypto exchange / market builder</td>
        <td class="col-pitch">Premium future brand for event-market vertical or expansion layer</td>
        <td class="col-role">Strategy / Corp Dev</td>
        <td class="col-status"><span class="status-badge">Not started</span></td>
        <td class="col-step">Curate shortlist</td>
      </tr>
    </tbody>
  </table>

  <!-- BOTTOM GRID -->
  <div class="content-grid">
    <div>
      <div class="section-title" style="margin-top: 0; border: none; padding-left: 0;">Section 3 — Outreach Rules</div>
      <ul>
        <li>Send the one-page teaser first when appropriate</li>
        <li>Send the full Acquisition Brief only after early interest</li>
        <li>Use the prediction-markets thesis first, not gambling language</li>
        <li>Keep first outreach short and premium</li>
        <li>Track each response and do not over-message</li>
      </ul>
    </div>

    <div>
      <div class="section-title" style="margin-top: 0; border: none; padding-left: 0;">Section 4 — Status Labels</div>
      <ul style="column-count: 2; column-gap: 4em;">
        <li>Not started</li>
        <li>Contact identified</li>
        <li>First outreach sent</li>
        <li>Follow-up sent</li>
        <li>Warm interest</li>
        <li>In discussion</li>
        <li>Price discussion</li>
        <li>Closed / passed</li>
      </ul>
    </div>
  </div>

</div>
