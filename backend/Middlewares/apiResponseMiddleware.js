const apiResponseMiddleware = (req , res ,next) => {
  res.apiSuccess = (httpCode = 200, status = true, message = '', data, error = '') => {
    res.json({ status: status, message, data, error: error }).status(httpCode);
  };
  
  res.apiError = (httpCode = 500, status = false, message = "Internal server error", data = {}, error = '') => {
    res.json({ status: status, message, data, error: error }).status(httpCode);
  };
  next();
}
module.exports = apiResponseMiddleware;
