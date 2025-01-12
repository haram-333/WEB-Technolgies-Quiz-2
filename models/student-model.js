import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        First_name:{
            type:String,
            required: [true,"Enter your first name:"]
        },
        Last_name:{
            type:String,
            required: [true,"Enter your last name:"]
        },
        Marks:{
            type:Number,
            required:[true,"Enter your previous degree marks:"]
        },
        Phone_number:{
            type:String,
            required:[true,"Enter your mobile number:"]
        },
        CNIC:{
            type:String,
            required:[true,"Enter your CNIC number without using (-):"]
        },
        City:{
            type:String,
            required:[true,"Enter your city name:"]
        },
        Country:{
            type:String,
            required:[true,"Enter your country name:"]
        },
        Scholarship:{
            type:Boolean,
            required:[true,"Do you have any Scholarship:"]
        }
    }
)

const Student=mongoose.model("Student", studentSchema)

export default Student;