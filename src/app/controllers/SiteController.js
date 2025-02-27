
const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController{

    // [GET] /news
    index(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(err => {
                next(err);
            });

        // res.render('home');
    }

    // [GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;