import photo1 from "./../../imgs/flood/1.jpeg";
import photo2 from "./../../imgs/flood/2.jpeg";
import photo3 from "./../../imgs/flood/3.jpeg";
import damage1 from "./../../imgs/damage/1.png";
import damage2 from "./../../imgs/damage/2.png";
import damage3 from "./../../imgs/damage/3.png";
import damage4 from "./../../imgs/damage/4.png";
import BA1 from "./../../imgs/beforeAfter/1.png";
import BA2 from "./../../imgs/beforeAfter/2.png";
import BA3 from "./../../imgs/beforeAfter/3.png";
import BA4 from "./../../imgs/beforeAfter/4.png";
import Lake0 from "./../../imgs/lake/before.png";
import Lake1 from "./../../imgs/lake/after.png";
import Sukkur1 from "./../../imgs/sukkur/1.png";
import Sukkur2 from "./../../imgs/sukkur/2.png";
import Nowshera1 from "./../../imgs/nowshera/1.png";
import Nowshera2 from "./../../imgs/nowshera/2.png";
import Kabul1 from "./../../imgs/kabul/1.png";
import Kabul2 from "./../../imgs/kabul/2.png";
import Mianwali1 from "./../../imgs/mianwali/1.png";
import Mianwali2 from "./../../imgs/mianwali/2.png";
import PKFlooded from "./../../imgs/pk-flooded.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (<div className="header">

        <div className="stick">
            <div className="main">
                <div className="text">
                    <h1 className="f-g">
                        33.4% Of <br /> 
                        <span className="green">Pakistan</span> Is <br />
                        <span className="water">
                            Underwater
                        </span>
                    </h1>
                    <Link to="/donate">
                        <button>
                            Act Now
                        </button>
                    </Link>
                </div>
                <div className="images">
                    <img src={photo1} alt="photo1" />
                    <br />
                    <img src={photo2} alt="photo2" />
                    <br />
                    <img src={photo3} alt="photo3" />
                </div>
            </div>
        </div>

        {/* <div className="flood">
            <center>
                <h1 className="f-m">
                    A Non-Profit Organization Working For <br /> Change
                </h1>
                <p className="info">
                    A Non-Profit Organization working for change, run by a group of students situated in Aitchison College. 
                    Giving our 100% of profit to NGOs which help aid Pakistan's flooding status. Let's donate and start 
                    working for change!
                </p>
            </center>
        </div> */}

        <div className="content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#222831" fill-opacity="1" d="M0,160L120,144C240,128,480,96,720,90.7C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <center>
                <h1 className="f-m">
                    22 Days, <span className="water">Ginormous</span> Damage
                </h1>
                <div className="damage">
                    <img src={damage1} alt="" />
                    <img src={damage2} alt="" />
                    <br />  
                    <img src={damage3} alt="" />
                    <img src={damage4} alt="" />
                </div>
                <br />
                <h1 className="f-m">
                    Every <span className="water">Ruppe</span> Counts
                </h1>
                <br />        
                <button>
                    Donate Now
                </button>
                <br /><br /><br /><br />


                <h1 className="f-m water" style={{width: "90%"}}>
                    “Despite having the lowest carbon emissions, Pakistan is bearing the pain of global warming, 
                    with 33 million people displaced for no fault of their own”
                </h1>

                <br /><br />

                <div className="damage">
                    <img src={BA1} alt="" />
                    <img src={BA2} alt="" />
                    <br />  
                    <img src={BA3} alt="" />
                    <img src={BA4} alt="" />
                </div>

                <br /><br />

                <h1 className="f-m" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        1,500+
                    </span>
                    &nbsp; Recorded Deaths
                </h1>

                <h1 className="f-m" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        12,758+
                    </span>
                    &nbsp; Recorded Injuries
                </h1>

                <h1 className="f-m" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        12,718+
                        {/* <span style={{fontSize: "50px"}}>km</span> */}
                    </span>
                    &nbsp; Km Roads Destroyed
                </h1>

                <h1 className="f-m" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        1,817,550+
                    </span>
                    &nbsp; Damaged Houses
                </h1>

                <h1 className="f-m" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        $30,000,000,000+&nbsp;
                    </span>
                    Loss
                </h1>

                <br /><br /><br />

                <h1 className="f-m water">
                    100Km Lake in Sindh
                </h1>

                <div className="damage">
                    <img src={Lake0} alt="" />
                    <img src={Lake1} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Sukkur, Sindh
                </h1>

                <div className="damage">
                    <img src={Sukkur1} alt="" />
                    <img src={Sukkur2} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Nowshera
                </h1>

                <div className="damage">
                    <img src={Nowshera1} alt="" />
                    <img src={Nowshera2} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Kabul River
                </h1>

                <div className="damage">
                    <img src={Kabul1} alt="" />
                    <img src={Kabul2} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Miawali
                </h1>

                <div className="damage">
                    <img src={Mianwali1} alt="" />
                    <img src={Mianwali2} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Total Flooded Area
                </h1>

                <div className="damage">
                    <img src={PKFlooded} width="50%" alt="" />
                </div>

            </center>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
    </div>);
}
 
export default Home;