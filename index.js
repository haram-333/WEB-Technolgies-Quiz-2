import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import connectDB from "./data base/dataBase.js"
import router from "./routes/studentRoutes.js"
import axios from "axios";

const port = process.env.PORT || 8000

const app = express();

app.use(express.json())
app.use("/api/student", router);

connectDB(process.env.MONGO_URI)

// Send Sample Data Programmatically Using Axios
const sendSampleData = async () => {
    const sampleData = {
            First_name: "ali",
            Last_name: "Doe",
            Marks: 85,
            Phone_number: "1234567890",
            CNIC: "12345-1234567-1",
            City: "Karachi",
            Country: "Pakistan",
            Scholarship: true,
        };

    try {
        // Send POST request to create a new student
        const response = await axios.post(`http://localhost:${port}/api/student`, sampleData);
        console.log("Response from API:", response.data);
    } catch (error) {
        console.log("Error sending data:", error);
    }
};

// Call the function to send the sample data
sendSampleData();

app.get("/", (req, res) => {
    res.send("Welcome to home page");
})


app.listen(port, () => {
    console.log(`Server is online at the link: https://localhost:${port}`)
})