import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/user.Routes.js";

dotenv.config();
const app = express();

// Define allowed origins
const allowedOrigins = [
    process.env.CLIENT_PRODUCTION,    // Production URL from env
    "http://localhost:5173",         // Local development
    "http://localhost:3000"          // Alternative local development
];

// CORS configuration
app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const URL = process.env.Atlas_MONGO_URL;

// Error handling for MongoDB connection
mongoose
    .connect(URL)
    .then(() => {
        console.log("Connected to MongoDB database");
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);  // Exit process with failure
    });

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Routes
app.get("/", (req, res) => {
    res.send("Hello from updated server");
});

app.use("/api", route);
app.use("/users", route);

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});