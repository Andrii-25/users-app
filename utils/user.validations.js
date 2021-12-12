const { check, validationResult } = require("express-validator");

module.exports = {
  validations: [
    check("username")
      .notEmpty()
      .withMessage("Username field is required")
      .isString()
      .withMessage("Username field must be a String")
      .isLength({ min: 3, max: 30 })
      .withMessage("Minimum length should be 3 characters, max 30 characters"),

    check("firstName")
      .notEmpty()
      .withMessage("Firstname field is required")
      .isString()
      .withMessage("Firstname field must be a String")
      .isLength({ max: 30 })
      .withMessage("Max length should be 30 characters"),

    check("lastName")
      .notEmpty()
      .withMessage("Lastname field is required")
      .isString()
      .withMessage("Lastname field must be a String")
      .isLength({ max: 30 })
      .withMessage("Max length should be 30 characters"),

    check("password")
      .notEmpty()
      .withMessage("Password field is required")
      .isLength({ min: 8 })
      .withMessage("Minimum length should be 8 characters"),
  ],

  validate: function (validations) {
    return async (req, res, next) => {
      await Promise.all(validations.map((validation) => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      res.status(400).json({ errors: errors.array() });
    };
  },
};
