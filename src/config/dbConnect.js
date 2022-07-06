import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Pedro:XlYd5jqmeBJRcnN5@cluster0.qiqfo.mongodb.net/Pedro-node");

let db = mongoose.connection;

export default db;