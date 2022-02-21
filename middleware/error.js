const errorMiddleware = (req, res, next) => {
  return res.status(400).send(`something went wrong`);
};

module.exports = errorMiddleware;
