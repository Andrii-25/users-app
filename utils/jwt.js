const expressJwt = require("express-jwt");
const userService = require("../service/user.service");

module.exports = jwt;

function jwt() {
  const secret = process.env.SECRET_JWT_KEY;
  return expressJwt({ secret, algorithms: ["HS256"], isRevoked }).unless({
    path: ["/users/login", "/users/register"],
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);
  if (!user) {
    return done(null, true);
  }
  done();
}
