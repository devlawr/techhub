import express from "express";
import RegisterControllers from "../Controllers/Register.js";
import validator from "../validator/inputValidator";
import helpers from "../helpers/validateInput";
import Validators from "../validator/validator";
import findExisting from './../Middleware/existingUser';
const router = express.Router();


const {RegisterInputValidator} = Validators;
const { RegisterValidator } = validator;
const { validateInput } = helpers;
const {existingMobile, existingEmail} = findExisting;
const { Register, FindAll } = RegisterControllers;



router.get("/all/users", FindAll);

router.post(
  "/register",
   RegisterValidator,
  RegisterInputValidator,
  validateInput,
   existingEmail,
   existingMobile,
  Register
);
export default router;
