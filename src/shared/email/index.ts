import {createTransport} from 'nodemailer';

const smtpConfig = {
    host: "smtp.gmail.com",
    port: 587,
    user: "agendoctorapp@gmail.com",
    pass: process.env.EMAILPASSWORD,
}

const transporter = createTransport({
  host: smtpConfig.host,
  port: smtpConfig.port,
  secure: false,
  auth: {
    user: smtpConfig.user,
    pass: smtpConfig.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(emailBody: string, email: string, subject: string) {
    const mailSent2 = await transporter.sendMail({
        subject: subject,
        from: "Agendoctor <agendoctorapp@gmail.com>",
        to: [email],
        html: emailBody
      });
  }

  export default sendEmail;