import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/ceo1.jpg";

const Ceo = () => {
    return (
        <section className="section-about-ceo">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Fade left>
                            <img src={img} alt="Mc Nene" />
                        </Fade>
                    </div>
                    <div className="col-md-6 about-ceo-text">
                        <h3 className="heading heading-primary">
                            <Flip bottom cascade>
                                Mc Nene
                            </Flip>
                        </h3>
                        <Fade bottom>
                            <p className="mt-5">
                                Etawanyo Joseph Bruce popularly known as Mc Nene
                                CEO Light House Entertainment(LHE). Born in the
                                Early 90s A comedian of the federal republic of
                                Nigeria( Stand up comedian, Compere, Event mc,
                                Host and a Comic Skit maker). Born and raised in
                                warri his passion and focus for entertaining
                                people started at his tender age during his
                                primary school days where he engage in most
                                dramatic/ social activities. In 2011 he joined
                                Federation Thearter Group of St Joseph The
                                Worker Catholic church Awka Anambra state, where
                                is was nurtured in stage acting and his career
                                as a comedian started unfolding. Later joined
                                Christ Embassy Drama Group and Anglican church
                                thearter Group all in Awka while in studying at
                                same time.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ceo;
