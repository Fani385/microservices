const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getToken } = require("../util/getToken");

module.exports.authenticateToken = (req, res, next) => {
    const token = getToken(req);
    if (!token)
        return res.apiError(401, true, "Unauthorized - Token not provided");
    jwt.verify(token, process.env.JWT_SECRET, async (error, data) => {
        if (error) {
            return res.apiError(401, false, "Forbidden - Invalid token", {}, error);
        }
        else {
            const user = await User.findById(data.id);
            //attach authenticated user to the request object 
            req.user = user;
            next();
        }
    })
}