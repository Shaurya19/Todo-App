const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shauryabarkund:cGHDmLqM5L7Lb4io@cluster0.ssvbvgo.mongodb.net/todos')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
