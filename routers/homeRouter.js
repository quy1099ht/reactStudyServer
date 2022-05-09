const express = require("express");
const router = express.Router();

function controller(name) {
    return require('../controlers/' + name + '')
}

router.get('/', function(request,response){
    controller('home').get(request,response)
})
router.post('/addTask', function(request,response){
    controller('home').addTask(request,response)
})

router.delete('/deleteTask', function(request,response){
    controller('home').deleteTask(request,response)
})

router.post('/completeTask', function(request,response){
    controller('home').completeTask(request,response)
})

module.exports = router