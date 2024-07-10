import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faPenRuler, faFileCode, faPills } from "@fortawesome/free-solid-svg-icons";

export default () => {
    return (
        <main>
            <div className="hero-section">
                <div className="text-container">
                    <h1>The Best Program <br />to <span>Enroll</span> for <br />Exchange</h1>
                    <p>"Unlocking knowledge for Everyone,Everywhere" Feel free to <br />let me know if you'd like any adjustments or additional <br />ideas!</p>
                    <button>Explore More <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="image-container">
                    <img src={`./hero-shape-2.png`} className="image1" />
                    <img src={`./hero-banner-2.jpg`} className="image2" />
                    <img src={`./hero-banner-1.jpg`} className="image3" />
                </div>
            </div>
            <hr />
            <div className="categories-container">
                <p className="heading">CATEGORIES</p>
                <h1>Online <span>Platform</span> For Remote Learning.</h1>
                <div className="card-container">
                    <div className="card-box">

                        {/* <i className="fa-solid fa-graduation-cap"></i> */}
                        <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                        <h3>Seemless Online<br />Connections</h3>
                        <p>"Unlock Your Potential with <br />a World-className Education"</p>

                    </div>
                    <div className="card-box">

                        {/* <i className="fa-solid fa-pen-ruler"></i> */}
                        <FontAwesomeIcon className="icon" icon={faPenRuler} />
                        <h3>Online Assignment<br />Delivery</h3>
                        <p>"Expand Your Horizons with <br />Flexible learning"</p>

                    </div>
                    <div className="card-box">

                        {/* <i className="fa-regular fa-file-code"></i> */}
                        <FontAwesomeIcon className="icon" icon={faFileCode} />
                        <h3>Unlimited<br />Annoucement</h3>
                        <p>"Bringing Education to Your <br />Doorstep"</p>

                    </div>
                    <div className="card-box">

                        {/* <i className="fa-solid fa-pills"></i> */}
                        <FontAwesomeIcon className="icon" icon={faPills} />
                        <h3>Hybrid Problem<br />Solving</h3>
                        <p>"Seamless Integration of <br />Online and On-Campus<br />Learning"</p>

                    </div>
                </div>
            </div>

            <hr />

            <div className="skill-section">
                <div className="image">
                    <img src={`./about-shape-3.png`} className="image01" />
                    <img src={`./about-banner.jpg`} className="image02" />
                    <div className="anim-card">
                        <div className="icon"><i className="fa-solid fa-user-plus"></i></div>
                        <p><span>20K+</span><br />Enrolled Learners</p>
                    </div>
                </div>
                <div className="text-box">
                    <h1>Enjoy by Solving <br /><span>Problems Online</span> for<br />Skill Development</h1>
                    <p>EduWeb empowers skill Development with expert <br />trainers, flexible online learning, and lifetime access <br />to courses, ensuring you can learn and grow at your <br />own pace.</p>
                    <div className="tik-box"><i className="fa-solid fa-check-double"></i>Expert Teachers</div>
                    <div className="tik-box"><i className="fa-solid fa-check-double"></i>Online Remote learning</div>
                    <div className="tik-box"><i className="fa-solid fa-check-double"></i>Free Access</div>
                </div>
            </div>
        </main>
    )
}