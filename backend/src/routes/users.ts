import express, { Request, Response } from "express"; // import express
import User from "../models/user"; // import User model
import jwt from "jsonwebtoken"; // import jwt
import { check, validationResult } from "express-validator"; // import validation middleware

// create router
const router = express.Router();

// POST /api/users/register
router.post(
 "/register", // define route
 [
   check("firstName", "First Name required") // validate firstName
     .isString(),
   check("lastName", "Last Name required") // validate lastName
     .isString(),
   check("email", "Email required") // validate email
     .isEmail(),
   check("password", "Password 6+ chars required") // validate password
     .isLength({ min: 6 }),
 ],
 async (req: Request, res: Response) => {
   const errors = validationResult(req); // get validation errors
   if (!errors.isEmpty()) {
     return res.status(400).json({ message: errors.array() });
   }
   try {
     let user = await User.findOne({ email: req.body.email }); // find user by email
     if (user) {
       return res.status(400).json({ message: "user already exists" });
     }
     user = new User(req.body); // create new user
     await user.save(); // save user

     const token = jwt.sign(
       { userId: user.id }, // create token
       process.env.JWT_SECRET_KEY as string
     );

     res.status(201).json({ message: "user created", token });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: "Server error" });
   }
 }
);

export default router; // export router