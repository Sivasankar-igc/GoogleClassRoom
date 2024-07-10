import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook, faLinkedin, faInstagram, faTwitter,faYoutube, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
export default () => {
    return (
        <footer>
            <div className="footer">
                <div className="about">
                    <h1><img src={`./logo.png`} />Edu<span>Web</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat provident dolor laudantium deserunt dicta? Perferendis similique consequuntur, antium doloribus.</p>
                    <div className="contact">
                        <p><span>Call:</span> +91 9865****</p>
                        <p><span>Email:</span> info@eduweb.com</p>
                    </div>

                </div>
                <div className="about1">
                    <h3>Online Platform</h3>
                    <p><a href="">About</a></p>
                    <p><a href="">Home</a></p>
                </div>
                <div className="about1">
                    <h3>Links</h3>
                    <p><a href="">Contact Us</a></p>
                    <p><a href="">FAQ's</a></p>
                    <p><a href="">Sign In/Registration</a></p>
                </div>
                <div className="about2">
                    <h3>Contacts</h3>
                    <p>Enter Your email address to registrer to our <br />Newsletter subscription</p>
                    <input type="email" placeholder="Your email" />
                    <button>Subscribe <i className="fa-solid fa-arrow-right"></i></button>
                    <div className="media-icons">
                        <a href="">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="">
                        <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}