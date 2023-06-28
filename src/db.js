import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://ibiUser:181881@Ib@cluster0.whizyoc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
  const collection = client.db("myapp").collection("inputs");
  // perform actions on the collection object
  client.close();
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

