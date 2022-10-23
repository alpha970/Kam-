export default async function (req, res) {
    require("dotenv").config();
  
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
      secure: true,
    });
    const mailData = {
      from: "kaaba.700@gmail.com",
      to: "kaaba.700@gmail.com",
      subject: `Message From Usman Asif Dev`,
      //   text: req.body.message + " | Sent from: " + req.body.email,
      html: `
      <div><strong>Name:</strong> ${req.body.fullName}</div>
      <br/>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <br/>
      <div><strong>Phone:</strong> ${req.body.phone}</div>
      <br/>
      <div><strong>Message:</strong> ${req.body.message}</div>
      <br/>
      `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    res.status(200).json({ status: "OK" });
  }
  