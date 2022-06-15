const express = require("express");
const { accessTokenVerify } = require("../middlewares/tokenMiddleWare");
const router = express.Router();
const { body, validationResult } = require('express-validator');

function controller(name) {
    return require('../controlers/' + name + '')
}

router.post('/api/register', body('email').isEmail().normalizeEmail(), body('password').escape(), function (request, response) {
    controller('api').register(request, response)
})
router.post('/api/login', function (request, response) {
    controller('api').login(request, response)
})

router.get("/api/getUser", accessTokenVerify, controller('api').getUser);

module.exports = router