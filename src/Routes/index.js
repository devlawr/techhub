import express from "express";
import RegisterControllers from "../Controllers/Register.js";
import SessionBooking from "../Controllers/Session.js";
import validator from "../validator/inputValidator";
import validatorSession from "../validator/inputValidatiorSession";
import helpers from "../helpers/validateInput";
import Validators from "../validator/validator";
import ValidatorinputSession from "../validator/ValidatorSession";
import findExisting from "./../Middleware/existingUser";

const router = express.Router();
const { SessionInputValidators } = ValidatorinputSession;
const { RegisterInputValidator } = Validators;
const { SessionValidator } = validatorSession;

const { RegisterValidator } = validator;
const { validateInput } = helpers;
const {
  existingMobile,
  existingEmail,
  SessionExistingEmail,
  SessionExistingMobile,
} = findExisting;
const { Register, FindAll, DeleteUser, SingleUser } = RegisterControllers;
const { BookSession, getAllBoookingList } = SessionBooking;

router.get("/all/users", FindAll);
router.get("/user/:email", SingleUser);
router.get("/booking/list", getAllBoookingList);
router.post(
  "/register",
  RegisterValidator,
  validateInput,
  RegisterInputValidator,
  existingEmail,
  existingMobile,
  Register
);
router.post(
  "/session",
  SessionValidator,
  validateInput,
  SessionInputValidators,
  SessionExistingEmail,
  SessionExistingMobile,
  BookSession
);

router.delete("/delete/:email", DeleteUser);
export default router;
