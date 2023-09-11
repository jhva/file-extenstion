const corsMiddleware = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", ["http://localhost:3000"]); // 특정 도메인 배열로 지정

  next();
};

module.exports = { corsMiddleware };
