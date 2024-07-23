import express, { Router } from 'express';

const app = express();
import "./db.js";

import bodyParser from "body-parser"
app.use(bodyParser.json()); // req.body




//app.use (bodypParser.urlencoded({extended:true}))
app.get('/', function (req, res) {
  res.send('Welcome to our hotel ')
})





// Import the router files
import personRoutes from "./routes/personRoutes.js";
import menuRoutes from "./routes/menuRoutes.js"

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log('listening on port 3000');
});