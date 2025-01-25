const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

// Email Sending Endpoint
app.post('/form', async (req, res) => {
    const { email, name, message } = req.body;
  
    if (!email || !name || !message) {
      return res.status(400).json({ error: 'All fields are required!' });
    }
  
    try {
      // Configure the transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'marvel10cent@gmail.com',
          pass: 'xnja ciid lgkg dosk',
        },
      });
  
      // Mail options
      const mailOptions = {
        from: email,
        to: 'marvel10cent@gmail.com',
        subject: `My Portfolio, ${name}`,
        text: message, 
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  });
  
  
  

app.listen(7000,()=>{
    console.log(`Server is running on port 7000 `)
})