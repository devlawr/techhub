import db from "../Models/index";
const Session = db.Session;

export default class SessionBooking {
    static BookSession (req,res)  {
    const { name, email, country,  } = req.body;
    let mobile = Number(req.body.mobile);

    const session = new Session({
      name,
      email,
      mobile,
      country,
    });
   try {
     session.save((err, user) => {
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


    static async getAllBoookingList(req,res) {
     const findAll = await Session.find();
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
}
