import { Request, Response } from "express";

const nodemailer = require('nodemailer');

const sendEmail = (req: Request, res: Response) => {
  const { sender, recipient, subject, message } = req.body;

  // Configurar el transportador de correo electrónico
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'fdmcwdaw@hotmail.com',
      pass: '123456789.Falla'
    }
  });

  // Configurar el contenido del correo electrónico
  const mailOptions = {
    from: sender,
    to: recipient,
    subject: subject,
    text: message
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.json({ message: 'Correo electrónico enviado correctamente' });
    }
  });
};

export default sendEmail;
