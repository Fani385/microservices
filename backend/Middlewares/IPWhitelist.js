const homedir = require('path').resolve('./');
require("dotenv").config();
const validIps = process.env.WHITE_LIST_IPS;
module.exports.IPWhitelist = (req, res, next) => {
    // if (!validIps.includes(req.get('X-Real-IP')))
    //     return res.apiError(403, false, "IP is not whitelisted", {});
    next();
}

module.exports.IPWhitelistview = (req, res, next) => {
    // if (!validIps.includes(req.get('X-Real-IP')))
    // return res.sendFile(homedir + '/html/error_403.html');
    next();
}