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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

    document.addEventListener("scroll", (e) => {
        // document.getElementById("main").style.transform = `scale(${1 + window.scrollY / 2000}) translateY(-6.5%)`;
        if (window.scrollY > (window.innerHeight - 100)) {
            document.querySelector("nav").classList.add("show");
        } else {
            document.querySelector("nav").classList.remove("show");
        }
    });

    return (<div className="header">

        <div className="stick">
            <div className="main" id="main">
                <motion.div 
                    initial={{ opacity: 0, x: -20, y: "-40%" }}
                    whileInView={{ opacity: 1, x: 0, y: "-40%" }}
                    transition={{ duration: 1 }}
                    viewport={{once: true}}
                    className="text" 
                >
                    <h1 className="f-gg">
                        <span className="red">33.4% </span>
                        Of 
                        <br /> 
                        <span className="green">Pakistan</span> Is <br />
                        <div className="back">
                            <span className="water">
                                Underwater
                            </span>
                        </div>
                    </h1>
                    <Link to="/donate">
                        <button>
                            Drain The Water
                        </button>
                    </Link>
                </motion.div>
                <video autoPlay={true} loop={true} muted style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "fixed",
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
                <br /><br />


                <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{once: true}}
                >
                    <h1 className="f-g">
                        22 Days, <span className="water">Ginormous</span> Damage
                    </h1>
                    <span>May God help us</span>
                </motion.div>

                <br /><br /><br />

                <div className="damage">
                    <motion.img viewport={{once: true}} initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.2}} src={damage1} alt="" />
                    <motion.img viewport={{once: true}} initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.3}} src={damage2} alt="" />
                    <br />  
                    <motion.img viewport={{once: true}} initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.4}} src={damage3} alt="" />
                    <motion.img viewport={{once: true}} initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: 0.5}} src={damage4} alt="" />
                </div>

                <br />

                <motion.div initial={{y: -20, scale: 0.9, opacity: 0}} whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1
                }} transition={{delay: 0.6}} viewport={{once: true}}>
                    <h1 className="f-m">
                        Every <span className="water">Cent</span> Counts
                    </h1>
                    <br />        
                    <button>
                        Donate Now
                    </button>
                </motion.div>

                



                <br /><br /><br /><br /><br /><br />

                <div className={`flood-bg${Math.floor(Math.random() * 3) + 1}`} >
                    <motion.div
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1}}
                        viewport={{once: true}}
                        className="back blur"
                    >
                        <p>
                            <h1 className="f-m">
                            “Despite having the <span className="water">LOWEST CARBON EMMISIONS</span> , <span className="green">Pakistan</span> is bearing the pain of global warming, 
                            with <span className="water">33 MILLION people</span> displaced for <span className="water">no fault</span> of their own”
                            </h1>
                            <div style={{textAlign: "right"}}>
                                <h1>-Representitive</h1>
                            </div>
                            
                            <Link to="/donate">
                                <button>
                                    Give the 33 mln people a place to call home
                                </button>
                            </Link>
                        </p>
                    </motion.div>
                </div>

                <div className={`flood-bg${Math.floor(Math.random() * 3) + 3}`}>
                    <motion.div 
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        viewport={{once: true}}
                        className="back blur"
                    >
                        <h1 className="f-m" >Schools, Houses, Feilds</h1>
                    </motion.div>
                    <div className="damage">
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.2}} src={BA1} alt="" />
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.3}} src={BA2} alt="" />
                        <br />  
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.4}} src={BA3} alt="" />
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.5}} src={BA4} alt="" />
                    </div>
                    <motion.h1 
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        transition={{delay: 0.6}}
                        viewport={{once: true}}
                        className="f-m">All <span className="underline">Disintegrated</span> to Atoms
                    </motion.h1>
                    <br />
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, scale: 1, y: -20}}
                        transition={{delay: 0.7}}
                        viewport={{once: true}}
                    >
                        <Link to="/donate">
                            <button>
                                Rebuilt those Atoms
                            </button>
                        </Link>
                    </motion.div>
                </div>




                <motion.div 
                    className="back blur"
                    initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                    viewport={{once: true}}
                >
                    <h1 className="f-m">
                        Sukkur <span className="water">Lost</span> 
                    </h1>
                </motion.div>

                <div className="damage">
                    <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.2}} src={Sukkur1} alt="" />
                    <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.3}} src={Sukkur2} alt="" />
                </div>

                <br /><br /><br />

                <>
                    <motion.div 
                        className="back"
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        viewport={{once: true}}
                    >
                        <h1 className="f-m">
                            Nowshera&nbsp;
                            <span className="water">
                                Drowned
                            </span>
                        </h1>
                    </motion.div>

                    <div className="damage">
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.2}} src={Nowshera1} alt="" />
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.3}}src={Nowshera2} alt="" />
                    </div>

                    <br /><br /><br />

                    <motion.div 
                        className="back"
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        viewport={{once: true}}
                    >
                        <h1 className="f-m">
                            Balochistan <span className="water">Inundated</span>
                        </h1>
                    </motion.div>

                    <div className="damage">
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.2}} src={Larkana1} alt="" />
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.3}} src={Larkana2} alt="" />
                    </div>

                    <br /><br /><br />

                    <motion.div 
                        className="back"
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        viewport={{once: true}}
                    >
                        <h1 className="f-m">
                            Qambar <span className="water">A Swamp</span>
                        </h1>
                    </motion.div>

                    <div className="damage">
                        <motion.img viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.2}} src={Qambar1} alt="" />
                    </div>

                    <br /><br /><br />
                </>


                <div className={`flood-bg${Math.floor(Math.random() * 5) + 1}`}>
                    <motion.div 
                        initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                        viewport={{once: true}}
                        className="back blur"
                    >
                        <p>
                            <h1 className="f-m">
                                SEE FOR YOURSELF - DO WE HAVE <span className="water">ANYTHING?</span> NOBODY IS GIVING US ANYTHING. THERE'S <span className="green">NOTHING</span> TO 
                                DRINK. <span className="water">I AM IN PAIN</span>
                            </h1>
                            <div style={{textAlign: "right"}}>
                                <h1>-Flood Victim</h1>
                            </div>
                            
                            <Link to="/donate">
                                <button>
                                    Donate Now
                                </button>
                            </Link>
                        </p>
                    </motion.div>
                </div>


                <br /><br /><br /><br />

                <motion.h1 
                    initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                    viewport={{once: true}}
                    className="back">
                    <h1 className="f-g water">
                        Annihilated
                    </h1>
                </motion.h1>

                <motion.h1 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.2}}
                    viewport={{once: true}}
                    className="f-s" 
                    style={{textAlign: "left", width: "80%"}}
                >
                    <span className="water f-g">
                        1,500+
                    </span>
                    &nbsp; Recorded Deaths
                </motion.h1>

                <motion.h1 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.2}}
                    viewport={{once: true}}
                    className="f-s" 
                    style={{textAlign: "left", width: "80%"}}
                >
                    <span className="water f-g">
                        12,758+
                    </span>
                    &nbsp; Recorded Injuries
                </motion.h1>

                <motion.h1 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.4}}
                    viewport={{once: true}}
                    className="f-s" 
                    style={{textAlign: "left", width: "80%"}}
                >
                    <span className="water f-g">
                        12,718+
                    </span>
                    &nbsp; Km Roads Destroyed
                </motion.h1>

                <motion.h1 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.5}}
                    viewport={{once: true}}
                    className="f-s" 
                    style={{textAlign: "left", width: "80%"}}
                >
                    <span className="water f-g">
                        1,817,550+
                    </span>
                    &nbsp; Damaged Houses
                </motion.h1>

                <motion.h1 
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.6}}
                    viewport={{once: true}}
                    className="f-s" 
                    style={{textAlign: "left", width: "80%"}}
                >
                    <span className="water f-g">
                        $30,000,000,000+&nbsp;
                    </span>
                    Loss
                </motion.h1>

                <br />

                <motion.div
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.6}}
                    viewport={{once: true}}
                >
                    <Link to="/donate">
                        <button>
                            Resotre Pakistan
                        </button>
                    </Link>
                </motion.div>

                <br /><br /><br /><br /><br /><br />


                <motion.div 
                    initial={{opacity: 0, scale: 0.9, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1, rotate: 1, scale: 1, y: -20}}
                    viewport={{once: true}}
                    className="back"
                >
                    <h1 className="f-g">Scale of <span className="water">destruction</span></h1>
                </motion.div>

                <br />

                <motion.iframe viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.5}} width="560" height="315" src="https://www.youtube.com/embed/xiAdTwjw0sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></motion.iframe>
                <motion.iframe viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.6}} width="560" height="315" src="https://www.youtube.com/embed/cCQKY9VvpL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></motion.iframe>
                <motion.iframe viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.7}} width="560" height="315" src="https://www.youtube.com/embed/THMkzr09O-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></motion.iframe>
                <motion.iframe viewport={{once: true}} initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: 0.8}} width="560" height="315" src="https://www.youtube.com/embed/frdykkVuNwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></motion.iframe>
            </center>
        </div>

        <div className="after-affects">

        </div>
    </div>);
}
 
export default Home;