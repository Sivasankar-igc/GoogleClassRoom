import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    studentName: String,
    studentPassword: String,
    branch: String,
})

const studentCol = new mongoose.model("studentCollection", studentSchema)
export default studentCol;