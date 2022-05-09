const mongoose = require("mongoose");
const { Schema } = mongoose;
const reqString = {
  type: String,
  required: true
}

const taskSchema = new Schema({
  name : reqString,
  isCompleted : Boolean,
});

const User = mongoose.model('Tasks',taskSchema);
module.exports = User;