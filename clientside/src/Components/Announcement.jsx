import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"

export default ({ isTeacher, data, announcements }) => {

    const [message, setMessage] = useState("")
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("teacher/announce", { teacherName: data.teacherName, message })
            .then(res => {
                const { status, message } = res.data;
                if (status) {
                    inputRef.current.value = ""
                    toast("Posted")
                } else {
                    toast("Something went wrongF")
                }
            })
            .catch(err => {
                toast("Network connection error")
                console.error(err)
            })
    }

    return (
        <div>
            {
                announcements.map(announcement => (
                    isTeacher && announcement.teacherName === data.teacherName
                        ? <div key={announcement._id}> {/* show the content on right side*/}
                            <p>You</p>
                            <p>{announcement.message}</p>
                            <p>{announcement.date_time.date}&nbsp;{announcement.date_time.time}</p>
                        </div>
                        : <div key={announcement._id}> {/* show the content on left side*/}
                            <p>{announcement.teacherName}</p>
                            <p>{announcement.message}</p>
                            <p>{announcement.date_time.date}&nbsp;{announcement.date_time.time}</p>
                        </div>
                ))
            }
            {
                isTeacher &&
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} placeholder="Enter Your Message" onChange={(e) => setMessage(e.target.value)} />
                    <button>Post</button>
                </form>
            }
        </div>
    )
}