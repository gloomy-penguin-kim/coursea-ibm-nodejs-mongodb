const mongoose = require('mongoose');
const Employee = require('./employee');

require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/employeeDB?retryWrites=true&w=majority`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
console.log(uri)

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("IDK my finally")
  }
}
run().catch(console.dir);


 Employee.find()
  .then(data => {
    console.log(data)
  })