"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const sendEmail = (req, res) => {
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
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico' });
        }
        else {
            console.log('Correo electrónico enviado:', info.response);
            res.json({ message: 'Correo electrónico enviado correctamente' });
        }
    });
};
exports.default = sendEmail;
