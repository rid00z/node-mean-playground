'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var Fix = new Schema({
  title: String,
  desc: String,
  image1: String,
  image2: String  
});
    
// Validations
// Fix.path('fix').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Fix', Fix);
