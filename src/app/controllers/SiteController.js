const Course = require('../models/Course');
const {
    mumutipleMongooseToObjectltiple,
    mutipleMongooseToObject,
} = require('../../utils/mongoose');

class SiteController {
    // Get
    index(req, res, next) {
        // Get data db = promise
        Course.find({})
            .then((courses) => {
                // convert array(handlebar) -> object

                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // get /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
