import express from "express";
import "dotenv/config";
import connectDb from "./database/dbconnection.js";
import authRoute from "./routes/auth.route.js";
import profileRoute from "./routes/profile.route.js";
import postRoute from "./routes/post.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
}))

app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

// API for Profile upload
app.use("/api/v1/profile", profileRoute);

// API for post
app.use("/api/v1/post", postRoute);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    });