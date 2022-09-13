import { check } from "express-validator";

const SessionValidators = {
  SessionInputValidators: [
    check("name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please fill the field for firstname")
      .matches(/^[a-zA-Z ]+$/)
      .withMessage("Please fill the field for firstname"),
    check("name")
      .custom((value) => !/\s/.test(value))
      .withMessage("No spaces are allowed in the firstname"),
  
    check("country")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please fill the field for cuntry")
      .matches(/^[a-zA-Z ]+$/)
      .withMessage("Please fill the field for country"),


    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Specify your email")
      .isEmail()
      .withMessage("Email must be in email format, like example@mail.com"),
    check("email")
      .custom((value) => !/\s/.test(value))
      .withMessage("No spaces are allowed in the email"),

    check("mobile")
      .trim()
      .not()
      .isEmpty()
      .matches(
        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
      )

      .withMessage(
        "Please fill the field for mobile filed and number not more then 11 degit"
      ),

    check("mobile")
      .custom((value) => !/\s/.test(value))
      .withMessage("No spaces are allowed for mobile"),
  ],
};

export default SessionValidators;
