// const User = require('./models/users');
const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    // console.log(req.headers);
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err = new Error("Auth header not set");
        // res.setHeader("WWW-Authenticate", "Basic");
        err.status = 401; 
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    let data;
        try{
            date = jwt.verify(token, process.env.SECRET);
        }
            catch(err){
                throw new Error('Token could not be verified');

            }
            req.userId = date._id;
            next();
        }
        module.exports = auth;
        

    // User.findOne({ username: auth[0] })
    //     .then((user) => {
    //         if (user === null) {
    //             let err = new Error("Username does not exits!");
    //             err.status = 403;
    //             return next(err);
    //         } else if (user.password !== auth[1]) {
    //             let err = new Error("Password does not match!");
    //             err.status = 403;
    //             return next(err);
    //         }
    //         req.user = user;
    //         next();
    //     }).catch(next);

