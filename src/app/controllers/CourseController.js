const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    // Get /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }); //Truyền dữ liệu course qua view
            })
            .catch(next);
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // POST /courses/store
    store(req, res, next) {
        // res.json(req.body);
        const formdata = req.body;
        formdata.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCML-byK5TPhWN_-ZuZal4h5KasYw`;
        const course = new Course(formdata);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
