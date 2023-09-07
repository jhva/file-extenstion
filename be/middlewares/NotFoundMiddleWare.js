const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ msg: "Page Not Found" });
  next();
};

module.exports = notFoundMiddleware;
