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
import Sukkur1 from "./../../imgs/sukkur/1.png";
import Sukkur2 from "./../../imgs/sukkur/2.png";
import Nowshera1 from "./../../imgs/nowshera/1.png";
import Nowshera2 from "./../../imgs/nowshera/2.png";
import Larkana1 from "./../../imgs/larkana/before.png";
import Larkana2 from "./../../imgs/larkana/after.png";
import Qambar1 from "./../../imgs/qambar.png";
import MainVid from "./../../imgs/main.mp4";
import PKFlooded from "./../../imgs/pk-flooded.png";
import { Link } from "react-router-dom";

const Home = () => {

    document.addEventListener("scroll", (e) => {
        document.getElementById("main").style.transform = `translateY(-${window.scrollY / 2}px) scale(${1 + window.scrollY / 7000})`;
        // Show the navbar when the user scrolls down
        console.log(window.scrollY);
        if (window.scrollY > 500 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    });

    return (<div className="header">

        <div className="stick">
            <div className="main" id="main">
                <div className="text" >
                    <h1 className="f-gg">
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
                <video autoPlay={true} loop={true} muted style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: "brightness(0.6)"
                }}>
                    <source src={MainVid} type="video/mp4" />
                </video>
            </div>
        </div>



        <div className="content">
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

                <h1 className="f-s" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        1,500+
                    </span>
                    &nbsp; Recorded Deaths
                </h1>

                <h1 className="f-s" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        12,758+
                    </span>
                    &nbsp; Recorded Injuries
                </h1>

                <h1 className="f-s" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        12,718+
                    </span>
                    &nbsp; Km Roads Destroyed
                </h1>

                <h1 className="f-s" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        1,817,550+
                    </span>
                    &nbsp; Damaged Houses
                </h1>

                <h1 className="f-s" style={{textAlign: "left", width: "80%"}}>
                    <span className="water f-g">
                        $30,000,000,000+&nbsp;
                    </span>
                    Loss
                </h1>

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
                    Balochistan
                </h1>

                <div className="damage">
                    <img src={Larkana1} alt="" />
                    <img src={Larkana2} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">
                    Qambar
                </h1>

                <div className="damage">
                    <img src={Qambar1} alt="" />
                </div>

                <br /><br /><br />

                <h1 className="f-m water">Scale of destruction</h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/xiAdTwjw0sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cCQKY9VvpL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/THMkzr09O-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/frdykkVuNwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
        </div>

        <div className="after-affects">

        </div>
    </div>);
}
 
export default Home;