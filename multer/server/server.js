import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imageRoute from "./routes/imageRoute.js";
import connectdb from "./config/db.js";

dotenv.config();
connectdb()

const app = express();

app.use(cors());
app.use(express.json());

// static folder
app.use("/uploads", express.static("uploads"));


// routes
app.use("/api/image", imageRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});