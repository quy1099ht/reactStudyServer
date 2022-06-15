const jwt = require('jsonwebtoken');

exports.accessTokenVerify = (req,res,next) => {
    const accessToken = req.header('authorization');
    const user = jwt.verify(accessToken.split(" ")[1].trim(),process.env.ACCESS_KEY);
    req.user = user;
    next();
}