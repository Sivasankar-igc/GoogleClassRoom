import { Link } from "react-router-dom"

export default () => {
    return (
        <header>
            <nav>
                <div className="logo"><img src={`./logo.png `} /><h2>Edu</h2><span>Web</span></div>
                <div className="elements">
                    <p><a href="#" className="active">Home</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Contact</a></p>
                    <div className="buttons">
                        <button><Link to={`/login/student`}>Student Login</Link></button>
                        <button><Link to={`/login/teacher`}>Teacher Login</Link></button>
                    </div>



                </div>

            </nav>
        </header >
    )
}