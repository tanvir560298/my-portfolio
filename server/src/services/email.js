import nodemailer from 'nodemailer'

function hasEmailConfiguration() {
  return Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.CONTACT_TO_EMAIL,
  )
}

export async function sendContactNotification(contact) {
  if (!hasEmailConfiguration()) {
    return false
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: contact.email,
    subject: `[Portfolio] ${contact.inquiryType}: ${contact.subject}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Inquiry: ${contact.inquiryType}`,
      '',
      contact.message,
    ].join('\n'),
  })

  return true
}
