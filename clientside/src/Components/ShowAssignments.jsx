import axios from "axios"
import { useRef, useState } from "react"
import { toast } from "react-toastify"

export default ({ isTeacher, assignmentData, userData }) => {

    const inputRef = useRef()

    const [message, setMessage] = useState("")
    const [image, setImage] = useState(null)

    const handleAssignmentPost = (img) => {
        axios.post(`student/postAssignment/${userData.branch}`, {
            assignment:assignmentData.assignment,
            studentName: userData.studentName,
            studentId: userData.studentId,
            message: message,
            image: img,
        })
            .then(res => {
                const { status, message } = res.data;
                if (status) {
                    toast("Posted")
                    inputRef.current.value = ""
                } else {
                    toast("Couldn't be posted")
                }
            })
            .catch(err => {
                console.error(err)
                toast("Network connection error")
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", image)
        axios.post("uploadImage", form)
            .then(res => {
                if (res.data !== null) {
                    handleAssignmentPost(res.data)
                } else {
                    toast("Image Uploading Problem")
                }
            })
            .catch(err => {
                console.error(err)
                toast("Network connection error")
            })
    }

    return (
        // the upper section
        <div>
            <div>
                teacherName : {assignmentData.teacherName}
                Date : {assignmentData.date_time.date}
                Time : {assignmentData.date_time.time}
                Question : {assignmentData.assignment}
            </div>
            <div>
                {
                    isTeacher
                        ? <div>
                            {
                                assignmentData.studentList.map(list => (
                                    <div>
                                        <p>Student Id : {list.studentId}</p>
                                        <p>Student Name : {list.studentName}</p>
                                        <p>Answer : {list.message}</p>
                                        <p>Date : {list.date_time.date}</p>
                                        <p>Time : {list.date_time.time}</p>
                                        <img src={`http://localhost:8000/Images/${list.image}`} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                        : <form onSubmit={handleSubmit}>
                            <input type="text" disabled value={userData.studentName} />
                            <input type="text" disabled value={userData.studentId} />
                            <input type="text" placeholder="Type Your Explanation" onChange={(e) => setMessage(e.target.value)} ref={inputRef} required />
                            <label htmlFor="image">Upload Image</label>
                            <input type="file" accept="image/*" id="image" onChange={(e) => setImage(e.target.files[0])} style={{ display: "none" }} />
                            <button>POST</button>
                        </form>
                }
            </div>
        </div>
    )
}