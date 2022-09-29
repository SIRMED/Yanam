import AitchionLogo from "./../imgs/aitchison-logo.png"
import YanamLogo from "./../imgs/yanam-logo.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return (<>
        <nav id="nav">
            <div className="logos">
                <img className="aitchison" src={AitchionLogo} alt="Aitchison Logo" />
                <img className="yanam" src={YanamLogo} alt="Aitchison Logo" />
            </div>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About Us
                </Link>
                <Link to="/donors">
                    Donors
                </Link>
                <Link to="/donors">
                    Flooding Status
                </Link>
                <Link to="/donate" className="donate">
                    Donate
                </Link>
            </div>
        </nav>
    </>);
}
 
export default Nav;