
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class courseController {
  //[GET] /course/:slug
  show(req, res, next) {
    // res.send('COURSE DETAIL '+ req.params.slug);
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render('courses/show', {course:  mongooseToObject(course)});
      })
      .catch(next);
  };

  //[GET] /courses/create
  create(req,res,next){
    res.render('courses/create');
  }

  //[POST] /courses/store
  store(req,res,next){
    res.json(req.params);
  }

  
}

module.exports = new courseController