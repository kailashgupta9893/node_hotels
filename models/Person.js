//import { uniq } from "lodash";
import mongoose from "mongoose";

// Define the Person schema
const personSchema = mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enm: ['chef', 'waiter', 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
});

// Create Person Model
const Person = mongoose.model('Person', personSchema);

export default Person;

//module.exports = Person;