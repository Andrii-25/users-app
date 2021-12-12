const { check, validationResult } = require("express-validator");

module.exports = {
  passwordValidations: [
    check("password")
      .notEmpty()
      .withMessage("Password field is required")
      .isLength({ min: 8 })
      .withMessage("Minimum length should be 8 characters"),
  ],

  validatePassword: function (validations) {
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
