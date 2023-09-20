const Student = require("../models/Student.model");

module.exports.studentsController = {
    getStudents: (req, res) => {
        Student.find({}).then((data) => {
            res.json(data)
        }).catch(() => {
            res.json('Произошла какая-то ошибка')
        })
    },
    postStudents: (req, res) => {
        console.log(req.body)
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age,
        }).then((data) => {
            res.json(data)
        })
    },
    deleteStudents: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.json('Студент удален')
        })
    },
    patchStudents: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {name: req.body.name}).then(() => {
            res.json('Имя студента изменено')
        })
    }
};