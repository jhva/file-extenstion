const RES = (status, msg, res, data) => {
  switch (status) {
    case 200:
      res.status(200).json({
        msg: msg,
        status,
        data,
      });
      break;
    case 201:
      res.status(201).json({
        msg: msg,
        status,
        data,
      });
      break;
    case 400:
      res.status(400).json({
        msg: msg,
        status,
      });
      break;
    default:
      break;
  }
};

module.exports = { RES };
