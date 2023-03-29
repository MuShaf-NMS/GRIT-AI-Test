const validator = (req, res, next) => {
  if (req.headers["user-id"] !== "ifabula" || req.headers.scope !== "user") {
    return res.status(401).json({ msg: "UNAUTHORIZED" });
  }
  next();
};

module.exports = validator;
