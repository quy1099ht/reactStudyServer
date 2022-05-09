const Tasks = require("../models/Tasks")
const mongodb = require("mongodb")
const remakeTaskString = (task) => {

}

exports.get = function (request, response) {
    Tasks.find({}, (err, tasks) => {
        if (err) {

        }
        return response.json(tasks)
    })

}
exports.addTask = (req, res) => {
    Tasks.create({
        name: req.body.taskname,
        isCompleted: false
    })
    return res.json({
        isAdded: true
    })
}
exports.deleteTask = async (req, res) => {
    console.log(req.body);
    const a = await Tasks.findOne({
        _id: req.body.taskId
    })

    const b = await Tasks.findOneAndDelete({
        _id: mongodb.ObjectId(req.body.taskId)
    })
    console.log("🚀 ~ file: home.js ~ line 34 ~ exports.deleteTask ~ b", b)

    console.log("🚀 ~ file: home.js ~ line 30 ~ exports.deleteTask ~ a", a)


    return res.json({
        isDeleted: true
    });
}
exports.completeTask = (req, res) => {

    Tasks.findOneAndUpdate({
        name: req.body.taskname
    }, {
        isCompleted: true
    }, (err) => {
        if (err) {

        }
        console.log("Worked!");
        return res.json({
            isCompleted: true
        })
    })

}