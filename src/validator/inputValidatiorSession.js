import fieldValidator from "../utils/emptyFiled";

class Validator {
  constructor() {
    this.SessionValidator = this.SessionValidator.bind(this);
  }

  SessionValidator(req, res, next) {
    const emptyFields = fieldValidator.call(
      this.SessionValidator,
      "session",
      req.body
    );
    if (emptyFields.status === 400) {
      return res.status(400).json({
        status: 400,
        error: emptyFields.error,
      });
    }
    next();
  }
}

export default new Validator();
