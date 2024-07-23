import mongoose from "mongoose";

// define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // replace 'mydatabase' with your database name

// set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Get the default connection 
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');

});

db.on('error', () => {
    console.log('MongoDB connection error');
    
});

db.on('disconnected', () => {
    console.log('MongoDB disConnected');
    
});

// Export the database connection
export default  db;





/*import mongoose from "mongoose";
mongoose.set('strictQuery',false);
const url = "mongodb://127.0.0.1:27017/hotels"
mongoose.connect(url)
console.log("database connected")

module.exports = db
*/