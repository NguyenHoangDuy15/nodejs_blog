const Course = require("../model/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { singleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /news/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: singleMongooseToObject(course) });
      })
      .catch((err) => {
        next(err);
      });
  }

  // [GET] /news/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: singleMongooseToObject(course) });
      })
      .catch((err) => {
        next(err);
      });
  }

  // [Post] /news/store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        next(err);
      });
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch((err) => {
        next(err);
      });
  }

  // [DELETE] /courses/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch((err) => {
        next(err);
      });
  }
}
module.exports = new CourseController();
