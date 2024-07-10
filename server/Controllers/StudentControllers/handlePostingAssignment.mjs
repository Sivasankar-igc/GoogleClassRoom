import branchCol from "../../Models/branchModel.mjs";
import { generateDate } from "../../utils/generateDate.mjs";
import { generateTime } from "../../utils/generateTime.mjs";

export default async (req, res) => {
    try {
        const branch = req.params.branch
        const { assignment, studentName, studentId, message, pdf } = req.body;

        const response = await branchCol.findOneAndUpdate({ branchName: branch, "assignments.assignment": assignment }, {
            $push: {
                "assignments.$.studentList": {
                    studentName,
                    studentId,
                    message,
                    pdf,
                    date_time: {
                        date: generateDate(),
                        time: generateTime()
                    }
                }
            }
        }, { new: true })
        
        res.status(200).json({ status: response !== null && response !== undefined, message: response })
    } catch (error) {
        console.error(`Posting Assignment : ${error}`)
    }
}