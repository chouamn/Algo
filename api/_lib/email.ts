// api/_lib/email.ts
import sgMail from '@sendgrid/mail';
import type { Inquiry } from '@prisma/client';

// Lazy configuration — do not crash at module-load time if env vars are
// missing. In Vercel the env is always present at runtime; this pattern
// also keeps unit tests importable without valid credentials.
let configured = false;
function ensureConfigured(): void {
  if (!configured) {
    const key = process.env.SENDGRID_API_KEY;
    if (!key) throw new Error('SENDGRID_API_KEY is not set');
    sgMail.setApiKey(key);
    configured = true;
  }
}

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildPlainText = (i: Inquiry): string =>
  [
    'New inquiry received from the Algotech website.',
    '',
    `ID:                ${i.id}`,
    `Received:          ${i.createdAt.toISOString()}`,
    `Service interest:  ${i.serviceInterest}`,
    '',
    `Name:              ${i.name}`,
    `Email:             ${i.email}`,
    `Phone:             ${i.phone ?? '(not provided)'}`,
    `Company:           ${i.company ?? '(not provided)'}`,
    '',
    'Message:',
    i.message,
  ].join('\n');

const buildHtml = (i: Inquiry): string => {
  const row = (label: string, value: string) =>
    `<tr>
       <td style="padding:6px 16px 6px 0;color:#64748b;font-size:13px;vertical-align:top;">${escapeHtml(label)}</td>
       <td style="padding:6px 0;color:#1E2749;font-size:14px;">${value}</td>
     </tr>`;

  return `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1E2749;max-width:640px;padding:24px;">
      <h2 style="margin:0 0 4px;font-size:20px;">New Inquiry Received</h2>
      <p style="margin:0 0 20px;color:#64748b;font-size:14px;">From the Algotech Solutions contact form.</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
        ${row('ID', escapeHtml(i.id))}
        ${row('Received', escapeHtml(i.createdAt.toISOString()))}
        ${row('Service', escapeHtml(i.serviceInterest))}
        ${row('Name', escapeHtml(i.name))}
        ${row('Email', `<a href="mailto:${escapeHtml(i.email)}" style="color:#3AB9DC;">${escapeHtml(i.email)}</a>`)}
        ${row('Phone', escapeHtml(i.phone ?? '—'))}
        ${row('Company', escapeHtml(i.company ?? '—'))}
      </table>
      <h3 style="margin:24px 0 8px;font-size:15px;">Message</h3>
      <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;font-size:14px;line-height:1.6;margin:0;">${escapeHtml(i.message)}</p>
    </div>
  `;
};

export async function sendInquiryNotification(inquiry: Inquiry): Promise<void> {
  try {
    ensureConfigured();
    const from = process.env.SENDGRID_FROM_EMAIL;
    const to = process.env.ADMIN_EMAIL;
    if (!from || !to) throw new Error('SENDGRID_FROM_EMAIL or ADMIN_EMAIL is not set');

    await sgMail.send({
      to,
      from,
      subject: `New Inquiry — ${inquiry.name} (${inquiry.serviceInterest})`,
      text: buildPlainText(inquiry),
      html: buildHtml(inquiry),
    });
    console.log(JSON.stringify({
      level: 'info',
      msg: 'Inquiry notification email sent',
      inquiryId: inquiry.id,
    }));
  } catch (error) {
    // Swallow the error — email failure must not surface as a 5xx to the client.
    console.error(JSON.stringify({
      level: 'error',
      msg: 'SendGrid email delivery failed',
      inquiryId: inquiry.id,
      message: (error as Error).message,
    }));
  }
}
