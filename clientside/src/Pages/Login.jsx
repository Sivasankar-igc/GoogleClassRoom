import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default ({ userType }) => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        id: "",
        password: ""
    })

    const formInput = [
        { type: "text", name: "id", placeholder: `Enter Your Mail` },
        { type: "password", name: "password", placeholder: "Enter Your Password" },
    ]

    const handleInput = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${userType}/login`, { id: userData.id, pass: userData.password })
            .then(res => {
                const { status, message } = res.data;
                if (status) {
                    navigate("/dashboard", {
                        state: {
                            isTeacher: userType === "teacher",
                            user: message
                        }
                    })
                } else {
                    toast(message)
                }
            })
            .catch(err => {
                console.error(`Login error : ${err}`)
                toast("Network connection error")
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {
                    formInput.map((input, index) => (
                        <div key={index}>
                            <input type={input.type} name={input.name} placeholder={input.placeholder} onChange={handleInput} />
                        </div>
                    ))
                }
                <button>Login</button>
                <p>Don't have an account?</p><Link to={`/signin/${userType}`}>Signin Here</Link>
            </form>
        </div>
    )
}