// import express, { Request, Response } from "express"
// import cors from "cors"
// import "dotenv/config"
// import mongoose from "mongoose";
// import myUserRoute from "./routes/MyUserRoutes"

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>
//     console.log("Connected to database!"));
 
// const app = express();
// app.use (cors(
//     {
//         origin: "http://localhost:5173", // Allow requests from this origin
//         credentials: true, // Allow cookies and credentials
//     }
// ));
// app.use(express.json());



// app.get("/test", async (req: Request, res: Response) => {
//     res.json({ "message": "hellow!" })
// });

// app.use("/api/my/user", myUserRoute);


// app.listen(3000, ()=>{
//     console.log("server started on localhost:3000")
// })









import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() =>
    console.log("Connected to database!")
);

const app = express();

// Enable CORS with specific options
app.use(
    cors({
        origin: "http://localhost:5173", // Allow requests from this origin
        credentials: true, // Allow cookies and credentials
    })
);

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
});

// Test route
app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello!" });
});

// Use the user routes
app.use("/api/my/user", myUserRoute);

// Start the server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});