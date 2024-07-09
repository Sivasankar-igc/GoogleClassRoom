import { useNavigate } from "react-router-dom"
import "../CSS/homepage.css"

export default ()=>{
    const navigate = useNavigate()

    return(
        <div className="container">
            <button className="button" onClick={() => navigate("login/student")}>Student Login</button>
            <button className="button" onClick={() => navigate("login/teacher")}>Teacher Login</button>
        </div>

    )
}