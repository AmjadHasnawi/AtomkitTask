const express = require('express');
const router = express.Router();
const Teacher = require('./database/teacher');
const Student = require('./database/student');
const Course = require('./database/course');
const Subject = require('./database/subject');


router.get('/', (req, res) => {
  res.send('Heo');
})

router.get('/getCourses', (req, res) => {
  Course.find({}).then((courses) => {
    res.send(courses);
  })
})

router.get('/getSubjects', (req, res) => {
  Subject.find({}).then((subject) => {
    res.send(subject);
  })
})

router.post('/createCourse', (req, res) => {
  console.log(req.body)
  const course = new Course({
    courseName: req.body.courseName,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    field: req.body.field,
    price: req.body.price,
    numberOfHours: req.body.numberOfHours,
    image: req.body.imageURL
  });
  course.save().then((course) => {
    const teacher = new Teacher({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      image: req.body.imageURL
    });
    teacher.save().then((teacher) => {
      Teacher.findOne({firstname: teacher.firstname}, (err, teacher) => {
        original = teacher.courses;
        original.push(course._id);
        Teacher.findOneAndUpdate({firstname: teacher.firstname}, {courses: original}, (err, teacher) => {
          const subject = new Subject({
            subjectName: req.body.subjectName,
          });
          subject.save().then((subject) => {
            Subject.findOne({subjectName: subject.subjectName}, (err, subject) => {
              original = subject.teachers;
              original.push(teacher._id);
              Subject.findOneAndUpdate({subjectName: subject.subjectName}, {teachers: original}, (err, teacher) => {
            res.end();
              })
            })
          });
          // res.end();
        })
      })
      // res.end();
    });
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
