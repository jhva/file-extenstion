const ERROR = (status, res, msg) => {
  switch (status) {
    case 500:
      res.status(500).json({
        msg: msg,
      });
      break;
  }
};

module.exports = { ERROR };
