/**
 * @author João Ponte
 */

const {now} = require("sequelize/lib/utils");

const dotenv = require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env" : ".env",
});
const express = require("express");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
// App
const app = express();

// Database
require("./database/index");
const { mailhog } = require("./config/mailhog");
const Notification = require("./models/Notification");
const User = require("./models/User");
const Reservation = require("./models/Reservation");

// Cron Jobs
cron.schedule("* * * * *", function () {
  // Send Emails
  sendMail();
  changeReservationStatus();

  // Others
  const date = new Date();
  console.log(
    "running a task every minute " +
      date.toLocaleString() +
      " " +
      process.env.MONGODB_DATABASE
  );
});

// Send Email
function sendMail() {
  // config info
  let mailTransporter;
  if (process.env.NODE_ENV === "dev") {
    mailTransporter = nodemailer.createTransport({
      host: mailhog.host,
      port: mailhog.smtp_port,
    });
  } else {
    mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  Notification.findAll({
    where: { send: 0 },
    include: [{ model: User }],
    order: [["created_at", "DESC"]],
    limit: 30,
  }).then(function (notifications) {
    let to = "teste@teste.com",
      sub = "BookingItHere",
      body = "Mensagem";
    notifications.map((notification) => {
      // for (let notification in notifications) {
      //     if (!notification) {
      //         continue;
      //     }

      // Setting credentials
      let mailDetails = {
        from: `BookingItHere <${process.env.SMTP_EMAIL}>`,
        to: notification.User.email ?? to,
        subject: sub,
        text: notification.msg,
      };

      // Sending Email
      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log("Error Occurs", err);
        } else {
          //if success update notification with send=1
          notification.update({ send: 1 });
          console.log("Email sent successfully");
        }
      });
    });
  });
}

// Atualizar estado da reserva
function changeReservationStatus() {
  const listReservations = Reservation.findAll({
    where: { 
        date_end : {[Op.lt] : now()},
        state_id : {[Op.lt] : 3} // Reservas com estado menor que Completo
    }
  });

  for (let index = 0; index < listReservations.length; index++) {
    const element = listReservations[index];
    Reservation.update(
        {
          state_id: 3 // Reservas com estado menor que Completo
        },
        {
          where: { id: element.id },
        }
      );
  }
}
