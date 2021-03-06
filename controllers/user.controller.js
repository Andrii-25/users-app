const express = require("express");
const router = express.Router();
const userService = require("../service/user.service");
const { validations, validate } = require("../utils/user.validations");
const {
  passwordValidations,
  validatePassword,
} = require("../utils/password.validations");

router.post("/login", login);
router.post(
  "/register",
  validate(validations),
  validatePassword(passwordValidations),
  register
);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", validate(validations), update);
router.delete("/:id", deleteUser);

module.exports = router;

async function login(req, res, next) {
  try {
    const user = await userService.login(req.body);
    user
      ? res.json(user)
      : res.status(400).json({ message: "Username or password is incorrect!" });
  } catch (e) {
    next(e);
  }
}

async function register(req, res, next) {
  try {
    await userService.create(req.body);
    res.json({
      message: `Successfully registered user '${req.body.username}'!`,
    });
  } catch (e) {
    next(e);
  }
}

async function getAll(req, res, next) {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
}

async function getCurrent(req, res, next) {
  try {
    const user = await userService.getById(req.user.sub);
    user ? res.json(user) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const user = await userService.getById(req.params.id);
    user ? res.json(user) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
}

async function update(req, res, next) {
  try {
    await userService.update(req.params.id, req.body);
    res.json({ message: "Successfully updated!" });
  } catch (e) {
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "Successfully deleted!" });
  } catch (e) {
    next(e);
  }
}
