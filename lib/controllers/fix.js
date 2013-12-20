'use strict';

var mongoose = require('mongoose'),
    Fix = mongoose.model('Fix'),
    async = require('async');

exports.createFix = function(req, res) {
  
  var fix = new Fix(req.body);
  
  fix.save();  

  return res.json(fix._id);
};

exports.listFix = function (req, res) {
  return Fix.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.getFix = function(req, res) {
  return Fix.findById(req.id, function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
}

