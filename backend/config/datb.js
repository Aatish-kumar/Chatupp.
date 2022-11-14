const mongoose = require("mongoose");

const connDB = async () => {
  try { 
    const connect = await mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 
    console.log(`database connection established: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
 
module.exports = connDB;