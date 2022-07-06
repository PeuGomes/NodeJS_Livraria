import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<password>@cluster0.qiqfo.mongodb.net/Pedro-node");

let db = mongoose.connection;

export default db;
