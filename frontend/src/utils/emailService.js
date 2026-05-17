// src/utils/emailService.js

export const sendDiscoveryEmail = (email, discoveredWord, familyId, wordMetadata, isNewMember = false) => {
  if (!email || !discoveredWord) return false;
  
  const emailLog = JSON.parse(localStorage.getItem('mavj_email_log') || '[]');
  emailLog.push({
    to: email,
    familyId,
    word: discoveredWord,
    wordMetadata,
    isNewMember,
    date: new Date().toISOString()
  });
  localStorage.setItem('mavj_email_log', JSON.stringify(emailLog));
  
  const certificateHTML = generateCertificateHTML(email, familyId, discoveredWord, wordMetadata, isNewMember);
  downloadCertificate(certificateHTML, familyId, discoveredWord);
  
  console.log(`📧 Certificate prepared for ${email} - Family ID: ${familyId}`);
  console.log(`📧 Word: ${discoveredWord}`);
  
  return true;
};

const generateCertificateHTML = (email, familyId, word, metadata, isNewMember) => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return `<!DOCTYPE html>
<html>
<head>
  <title>MAVJ Certificate - ${familyId}</title>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: linear-gradient(135deg, #0a0a0a, #1a0033);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 40px;
      font-family: 'Georgia', 'Montserrat', serif;
    }
    .certificate {
      max-width: 750px;
      width: 100%;
      background: linear-gradient(135deg, #000000, #0a0a1a);
      border: 3px solid transparent;
      border-image: linear-gradient(135deg, #FFD700, #00d4ff, #FF00FF, #9400D3) 1;
      border-image-slice: 1;
      border-radius: 30px;
      padding: 45px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    .certificate::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(circle at 20% 30%, rgba(255,215,0,0.08) 2px, transparent 2px);
      background-size: 35px 35px;
      pointer-events: none;
    }
    .certificate-content { position: relative; z-index: 1; }
    .logo { text-align: center; margin-bottom: 25px; }
    .logo h1 { font-size: 2rem; font-weight: 900; background: linear-gradient(135deg, #FFD700, #FFA500, #FFD700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 2px; }
    .family-id { text-align: center; background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,212,255,0.1)); padding: 18px; border-radius: 15px; margin: 20px 0; border: 1px solid rgba(255,215,0,0.3); }
    .family-id span { color: #00d4ff; font-size: 1.2rem; font-weight: bold; letter-spacing: 1px; }
    .family-id .id { color: #FFD700; font-size: 1.4rem; font-family: monospace; }
    ${isNewMember ? `<div class="new-member-badge" style="text-align:center; background:linear-gradient(135deg,#FFD700,#FF8C00); padding:12px; border-radius:40px; margin:15px 0; color:#000; font-weight:bold; font-size:1.1rem;">🎉 WELCOME TO THE MAVJ FAMILY! 🎉</div>` : ''}
    .recipient { text-align: center; margin: 20px 0; }
    .recipient .label { color: #FFD700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; }
    .recipient .email { color: #fff; font-size: 1.2rem; font-weight: bold; margin-top: 5px; }
    .word-breakdown { background: linear-gradient(135deg, rgba(0,212,255,0.08), rgba(139,92,246,0.08)); border-radius: 18px; padding: 25px; margin: 25px 0; border: 1px solid #00d4ff; }
    .word-breakdown h3 { color: #FFD700; margin-bottom: 18px; font-size: 1.3rem; border-left: 4px solid #FFD700; padding-left: 15px; }
    .word-breakdown .word { font-size: 2rem; color: #00d4ff; text-align: center; margin-bottom: 20px; font-weight: bold; letter-spacing: 2px; }
    .word-breakdown p { color: #DDD6B8; margin: 10px 0; line-height: 1.5; }
    .word-breakdown strong { color: #FFD700; }
    .signature { text-align: center; margin-top: 30px; padding-top: 25px; border-top: 1px solid rgba(255,215,0,0.3); }
    .signature .name { font-family: 'Brush Script MT', cursive; font-size: 1.8rem; color: #FFD700; }
    .signature .title { font-size: 0.7rem; color: #00d4ff; letter-spacing: 2px; }
    .date { text-align: center; margin-top: 20px; color: rgba(255,255,255,0.4); font-size: 0.7rem; }
    .footer { text-align: center; margin-top: 25px; font-size: 0.6rem; color: rgba(255,255,255,0.3); }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="certificate-content">
      <div class="logo"><h1>⚡ MAVJ ⚡</h1></div>
      ${isNewMember ? `<div class="new-member-badge" style="text-align:center; background:linear-gradient(135deg,#FFD700,#FF8C00); padding:12px; border-radius:40px; margin:15px 0; color:#000; font-weight:bold; font-size:1.1rem;">🎉 WELCOME TO THE MAVJ FAMILY! 🎉</div>` : ''}
      <div class="family-id"><span>✦ FAMILY ID: <span class="id">${familyId}</span> ✦</span></div>
      <div class="recipient"><div class="label">Presented to</div><div class="email">${email}</div></div>
      <div class="word-breakdown">
        <div class="word">"${word.toUpperCase()}"</div>
        <h3>📖 Word Etymology & Breakdown</h3>
        <p><strong>Definition:</strong> ${metadata.definition || 'A new vibrational word entering the MAVJ Lexicon.'}</p>
        <p><strong>Etymology:</strong> ${metadata.etymology || 'Roots emerging from collective consciousness.'}</p>
        <p><strong>Discovered:</strong> ${currentDate}</p>
      </div>
      <div class="signature"><div class="name">Robin MAVJ</div><div class="title">Founder, MAVJ Living Dictionary</div></div>
      <div class="date">Certified this day · ${currentDate}</div>
      <div class="footer">MAVJ · My Alkaline Vegan Journey · Vibrational Intelligence</div>
    </div>
  </div>
</body>
</html>`;
};

const downloadCertificate = (html, familyId, word) => {
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `MAVJ_Certificate_${familyId.replace(/[^a-zA-Z0-9]/g, '_')}_${word}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const simulateEmailSend = (to, subject, body) => {
  console.log('📧 EMAIL SIMULATION');
  console.log('To:', to);
  console.log('Subject:', subject);
  return true;
};