var express = require('express');
var Task = require('../models/Task');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("just the backend!");
});

/* GET all tasks */
// TODO: add proper error handling
router.get('/tasks', function(req, res) {
  Task.find({}, function(err, data) {
    if (err) {
      res.status(500);
    }

    res.json(data);
  });
});

/* POST create new task */
router.post('/task/new', function(req, res, next) {
  var task = new Task(req.body);
  
  task.save(function(err, payload) {
    if (err) {
      res.status(500);
      console.log(err);
    }

    res.json(payload);
  });
});

module.exports = router;