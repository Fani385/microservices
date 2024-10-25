module.exports.getToken = (req) => {
    return (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") ? req.headers.authorization.split(" ")[1] : null;
}