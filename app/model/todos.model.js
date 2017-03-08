
var mongoose = require('mongoose');
var db = require('../config/connection');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    todo: String,
    dueDate: Date,
    completed: {type:Boolean, default:false}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;