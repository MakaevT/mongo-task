const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(require('./routes/students.route'));

mongoose.connect("mongodb+srv://brunsmayer:brunsmayer@cluster0.26hjj67.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.listen(4000, () => {
    console.log('Сервер успешно запущен http://localhost:4000')
  })