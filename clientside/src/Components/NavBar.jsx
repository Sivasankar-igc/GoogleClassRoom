import { Link } from "react-router-dom"

export default () => {
    return (
        <header>
            <nav>
                <div className="logo"><img src={`logo.png `} /><h2>Edu</h2><span>Web</span></div>
                <div className="elements">
                    <p><Link to="/" className="active">Home</Link></p>
                    <p><Link to="">About</Link></p>
                    <p><Link to="">Contact</Link></p>
                    <div className="buttons">
                        <button><Link to={`/login/student`}>Student Login</Link></button>
                        <button><Link to={`/login/teacher`}>Teacher Login</Link></button>
                    </div>
                    {/* 
                    <input type="checkbox" id="menu-bar">
                    <label for="menu-bar"><i class="fa-solid fa-bars"></i></label> */}

                </div>

            </nav>
        </header >
    )
}