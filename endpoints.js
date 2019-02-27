const express = require('express');
const router = express.Router();
const Teacher = require('./database/teacher');
const Student = require('./database/student');


router.get('/', (req, res) => {
  res.send('Heo');
})

router.get('/getTeachers', (req, res) => {
  Teacher.find({}).then((teachers) => {
    res.send(teachers);
  })
})

router.post('/createTeacher', (req, res) => {
  const teacher = new Teacher({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    teacherMajor: req.body.teacherMajor,
  });
  teacher.save().then((teacher) => {
    res.end();
  });
})

router.get('/getStudents', (req, res) => {
  Student.find({}).then((students) => {
    res.send(students);
  })
})

router.post('/createStudent', (req, res) => {
  const student = new Student({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
  });
  student.save().then((student) => {
    res.end();
  });
})

module.exports = router;
