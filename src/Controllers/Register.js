import db from "../Models/index";
const Register = db.Register;

export default class RegisterControllers {
  static Register(req, res) {
    const { firstname, lastname, email, country, prefference } = req.body;
    let mobile = Number(req.body.mobile);

    const User = new Register({
      firstname,
      lastname,
      email,
      mobile,
      country,
      prefference,
    });

    try {
      User.save((err, user) => {
        if (err) {
          res.status(500).json({ message: err.message });
          return;
        }
        return res.status(201).json({
          message: "user successfully created",
          payload: user,
        });
      });
    } catch (error) {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }
    }
  }

  static async FindAll(req, res) {
    const findAll = await Register.find();
    try {
      if (!findAll) {
        res.status(400).json({
          message: "no records in the database",
        });
        return;
      }

      res.status(200).json({
        payload: findAll,
      });
      return;
    } catch (error) {
      if (error) {
        return res.status(500).json({
          error: error,
          messgae: "check the error",
        });
      }
    }
  }
  // findand delete

  static async DeleteUser(req, res) {
    const email = req.params.email;
    const FindUser = await Register.findOneAndDelete({ email });
    if (!FindUser) {
      return res.status(400).json({
        message: `${email} does not exist in the database`,
      });
    }
    return res.status(200).json({
      message: `${email} deleted successfully`,
    });
  }
  static async SingleUser(req, res) {
    const email = req.params.email;
    const user = await Register.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: `${email} does not exist in the database`,
      });
    }

    return res.status(200).json({
      payload: user,
      message: `${email} info retrieved successfully`,
    });
  }
}
