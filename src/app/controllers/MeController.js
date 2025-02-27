
const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController{


    // [GET] /stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController;