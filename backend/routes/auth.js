const express = require("express");
const Freelaceruser = require("../models/FreelancerUser");
const clientuser = require("../models/ClientUser");
const router = express.Router();
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchuser = require("../meddleware/fetchuser");

const JWT_SECRET = "kinarisgoods";

// route 1
router.post(
  "/clientuser",
  [
    body("name", "enter your name").isLength({ min: 3 }),
    body("email", "enter your email").isEmail(),
    body("password", "enter password must be 6 character").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors,return bad req.. and the erro..
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       success = false;
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exists already

    try {
      success = false;
      let a=req.body.email
      let user = await clientuser.findOne({ email: a});
      console.log(user)
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await clientuser.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
       success = true;
      res.json({ success,authToken });
    } catch (error) {
      console.log(error);
    }
  }
);


router.post(
  "/freelanceruser",
  [
    body("name", "enter your name").isLength({ min: 3 }),
    body("email", "enter your email").isEmail(),
    body("password", "enter password must be 6 character").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors,return bad req.. and the erro..
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       success = false;
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exists already

    try {
      success = false;
      let user = await Freelaceruser.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await Freelaceruser.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
       success = true;
      res.json({ success,authToken });
    } catch (error) {
      console.log(error);
    }
  }
);



// route 2 : authenticate
router.post(
  "/client/login",
  [
    body("email", "enter your email").isEmail(),
    body("password", "password can't not be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors,return bad req.. and the erro..
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await clientuser.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ error: "password incurrect" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error " });
    }
  }
);
router.post(
  "/freelancer/login",
  [
    body("email", "enter your email").isEmail(),
    body("password", "password can't not be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors,return bad req.. and the erro..
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await Freelaceruser.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ error: "password incurrect" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error " });
    }
  }
);

// route 3 : get loggedin user details

router.get("/client/getuser", fetchuser, async (req, res) => {
  try {
    debugger  
    const userid = req.user.id;
    const user = await clientuser.findById(userid).select("-password");
    res.send(user);
    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/freelancer/getuser", fetchuser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await Freelaceruser.findById(userid).select("-password");
    res.send(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
