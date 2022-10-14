import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guihlsp:gEn3wxAjqSF8KUtw@cluster0.tcx7yfr.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;