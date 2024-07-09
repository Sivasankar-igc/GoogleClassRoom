import axios from "axios"
import { useRef, useState } from "react"
import { toast } from "react-toastify"

export default ({ isTeacher, teacherData, branchMessages }) => {
    const [message, setMessage] = useState("")
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`teacher/postMessage/${teacherData.branch}`, { teacherName: teacherData.teacherName, message })
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
                branchMessages.map(msg => (
                    isTeacher && teacherData.teacherName === msg.teacherName
                        ? <div key={msg._id}> {/* show the content on left side*/}
                            <p>You</p>
                            <p>{msg.message}</p>
                            <p>{msg.date_time.date}&nbsp;{msg.date_time.time}</p>
                        </div>
                        : <div key={msg._id}> {/* show the content on left side*/}
                            <p>{msg.teacherName}</p>
                            <p>{msg.message}</p>
                            <p>{msg.date_time.date}&nbsp;{msg.date_time.time}</p>
                        </div>
                ))
            }
            {
                isTeacher && <form onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} placeholder="Type Your Message" onChange={(e) => setMessage(e.target.value)} />
                    <button>POST</button>
                </form>
            }
        </div>
    )
}