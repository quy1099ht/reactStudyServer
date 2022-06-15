const jwt = require("jsonwebtoken");

const mails = ["a@gmail.com", "b@gmail.com", "barry@gmail.com"]

exports.register = function (request, response) {
    console.log(request.body);
    if (mails.includes(request.body.email)) {

        return response.status(401).json({
            isRegistered: false,
            message: "This email is existed!"
        });
    }
    else {

        return response.status(201).json({
            isRegistered: true,
            message: "Your account is registered!"
        });
    }
}

exports.login = (req, res) => {
    console.log(req.body);
    const accessToken = jwt.sign(req.body, process.env.ACCESS_KEY, { expiresIn: "60h" });
    return res.status(201).json({
        message: "Logged in!",
        accessToken: accessToken
    });
}

exports.getUser = (req, res) => {
    return res.status(201).json({
        user : req.user
    });
}