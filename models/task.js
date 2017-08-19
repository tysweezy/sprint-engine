var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** Todo: add in created_at, due data, completed, etc. fields. */
var taskSchema = new Schema({
    name: String,
    description: String
}); 

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;