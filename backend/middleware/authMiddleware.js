const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    let token = authorization;

    if (authorization.startsWith("Bearer ")) {
      token = authorization.substring(7);
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.admin = decoded;

    next();
  } catch (error) {
    console.error("❌ Auth Middleware Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;