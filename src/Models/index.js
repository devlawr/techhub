import mongoose from "mongoose";
import Register from './Registration.Models';
import Session from './session';
mongoose.Promise= global.Promise;

const db = {};
db.Register = Register;
db.Session = Session;

db.mongoose=mongoose;

export default db;