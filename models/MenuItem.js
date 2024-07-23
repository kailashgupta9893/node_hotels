import mongoose from "mongoose";

// Define the Person schema
const menuItemSchema = mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum: ['sweet', 'spicy', 'sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        default: []
    },
    num_sales: {
        type:Number,
        default:0
    },
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;

