import express from 'express'
import sendEmail from './emailService/emailService'
const app = express()

const PORT = 4300

sendEmail('mailtest3606@gmail.com', 'John doe')

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})