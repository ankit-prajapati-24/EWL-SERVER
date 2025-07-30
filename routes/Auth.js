const express = require("express");
const route = express.Router();

const { Signup,Login} = require("../controllers/AuthController");

route.post("/Signup", Signup);
route.get("/Login",Login);



module.exports = route;