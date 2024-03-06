import { User } from "../../../models/User";
import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

export async function POST(req) {
    const url = process.env.MONGO_URL;

    // Establish MongoDB connection
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB");
            // Start the server or perform any other operations after successful connection
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
            process.exit(1); // Terminate the application if unable to connect to the database
        });

    // Route handler for POST requests
    const body = await req.json();
    const pass = body.password;
    if (!pass?.length || pass.length <= 5) {
        new Error("Password must be at least 5 characters")
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);

    const createdUser = await User.create(body);
    return Response.json(createdUser);
}
