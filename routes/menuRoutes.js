import express from "express";
const router = express.Router();

import MenuItem from '../models/MenuItem.js';


// POST route to add a MenuItem
router.post('/', async (req, res) => {
    try {
      const data = req.body // Assuming the request body contains the person data
  
      // Create a new person document using the Mongoose model
      const newMenu = new MenuItem(data);
      // newPerson.name = data.name;
  
      // Save the new person to the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })


  // GET method to get the Menu items
router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  export default router;

