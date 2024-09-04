import express from "express";
import "dotenv/config";
import connectDb from "./database/dbconnection.js";
import authRoute from "./routes/auth.route.js";
import profileRoute from "./routes/profile.route.js";
import postRoute from "./routes/post.route.js";
import RandomPostsRoute from "./routes/randomposts.route.js";
import unfollow from "./routes/unfollow.route.js";
import follow from "./routes/follow.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app); 

app.use(cors({
    origin: ["http://localhost:5173", "https://zylonet.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
}));

// Socket.IO server
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "https://zylonet.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
    }
});

// Socket connection
io.on("connection", (socket) => {

    // Join room
    socket.on("join_room", (roomName) => {
        socket.join(roomName);
    });

    // Handle private message
    socket.on("private_message", ({ senderId, roomName, message }) => {
        io.to(roomName).emit("receive_message", { senderId, message });
    });
});


app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

// API for Profile upload
app.use("/api/v1/profile", profileRoute);

// API for post
app.use("/api/v1/post", postRoute);

// API for random posts
app.use("/api/v1/randomposts", RandomPostsRoute);

// API for follow
app.use("/api/v1/follow", follow);

// API for unfollow
app.use("/api/v1/unfollow", unfollow);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
connectDb()
    .then(() => {
        server.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    });