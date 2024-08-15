import express from "express";
import "dotenv/config";
import connectDb from "./database/dbconnection.js";
import authRoute from "./routes/auth.route.js";
import profileRoute from "./routes/profile.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

// API for Profile upload
app.use("/api/v1/profile", profileRoute);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    });