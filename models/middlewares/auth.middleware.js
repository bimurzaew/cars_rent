const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "ошибка авторизации" });
  }
  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.status(401).json({ error: "неверный тип токена" });
  }
  try {
    req.user = await jwt.verify(token, process.env.JWT_KEY);

    next();
  } catch (e) {
    return res
      .status(404)
      .json({ error: "Ошибка авторизации: " + e.toString() });
  }
};
