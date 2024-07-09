import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Assignments from "../Components/Assignments";
import Announcement from "../Components/Announcement";
import PostAssignments from "../Components/PostAssignments";
import ShowAssignments from "../Components/ShowAssignments";
import BranchMessages from "../Components/BranchMessages";
import axios from "axios"
import { toast } from "react-toastify";

export default () => {
    const state = useLocation().state;

    const isTeacher = state.isTeacher;
    const user = state.user;

    const [currentState, setCurrentState] = useState("announcement");
    const [announcements, setAnnouncements] = useState(null)
    const [branchData, setBranchData] = useState(null)
    const [currentAssignment, setCurrentAssignment] = useState(null)

    useEffect(() => {
        //fetch the branch according to the student or teacher
        axios.get(`getBranchDetails?branch=${user.branch}`)
            .then(res => {
                const { status, message } = res.data;
                if (status) setBranchData(message)
                else toast("Something went wrong")
            })
            .catch(err => {
                toast("Network connection error")
                console.error(`Retrieving branch data : ${err}`)
            })
    }, [user])

    useEffect(() => {
        axios.get("getAnnouncements")
            .then(res => {
                const { status, message } = res.data;
                if (status) setAnnouncements(message)
                else toast("Something went wrongfd")
            })
            .catch(err => {
                toast("Network connection error")
                console.error(`Retrieving announcement data : ${err}`)
            })
    }, [])

    if (announcements && branchData) {

        return (
            <>
                <div>
                    {
                        isTeacher
                            ? <>
                                Teacher Id :{user.teacherId}
                                Teacher Name :{user.teacherName}
                            </>
                            : <>
                                Student Id :{user.studentId}
                                Student Name :{user.studentName}
                            </>
                    }
                </div>
                <div>
                    <Assignments assignments={branchData.assignments} setCurrentState={() => setCurrentState("showassignment")} setCurrentAssignment={setCurrentAssignment} />
                    {isTeacher && <button onClick={() => setCurrentState("postassignment")}>Post Assignment</button>}
                    <button onClick={() => setCurrentState("branchmessages")}>Messages</button>
                    <button onClick={() => setCurrentState("announcement")}>Announcements</button>
                    {currentState === "announcement" && <Announcement isTeacher={isTeacher} data={user} announcements={announcements} />}
                    {currentState === "postassignment" && <PostAssignments teacherData={user} branchName={branchData.branchName} />}
                    {currentState === "showassignment" && <ShowAssignments isTeacher={isTeacher} assignmentData={currentAssignment} userData={user} />}
                    {currentState === "branchmessages" && <BranchMessages isTeacher={isTeacher} teacherData={user} branchMessages={branchData.messages} />}
                </div>
            </>
        )
    } else {
        return (
            <p style={{ textAlign: "center" }}>Loading...</p>
        )
    }
}