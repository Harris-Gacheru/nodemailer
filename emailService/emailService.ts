import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

import ejs from 'ejs'

const configuration = {
    port: 587,
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
}

const createTransporter = (config: object) => {
    let transporter = nodemailer.createTransport(config)
    return transporter
}

const sendEmail = async (email: string, name: string) => {

    await ejs.renderFile('./templates/welcomeEmail.ejs', {name: name}, async (err, data) => {
        let transport = createTransporter(configuration)

        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Welcome to nodemailer class 101',
            text: 'Learning to use nodemailer',
            html: data
        }

        try {
            await transport.sendMail(mailOptions)
            console.log(`Email sent successully`)
        } catch (error) {
            console.log(`Error: ${error}`)            
        }
    })
}

export default sendEmail