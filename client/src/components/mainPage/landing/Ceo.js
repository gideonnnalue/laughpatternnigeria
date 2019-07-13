import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const ceo = () => {
    return (
        <section className="section-ceo">
            <div className="container ceo-card">
                <div className="row">
                    <div className="col-md-6 ceo-desc">
                        <div className="container">
                            <div className="row">
                                <div className="col p-5">
                                    <h3
                                        className="heading heading-primary mt-5 text-white"
                                        style={{
                                            fontSize: "24px"
                                        }}
                                    >
                                        <Flip bottom cascade>
                                            Meet the CEO
                                        </Flip>
                                    </h3>
                                    <Fade bottom>
                                        <p className="text-white mt-5">
                                            Etawanyo Joseph Bruce popularly
                                            known as Mc Nene CEO Light House
                                            Entertainment(LHE). Born in the
                                            Early 90s A comedian of the federal
                                            republic of Nigeria( Stand up
                                            comedian, Compere, Event mc, Host
                                            and a Comic Skit maker). Born and
                                            raised in warri his passion and
                                            focus for entertaining people
                                            started at his tender age during his
                                            primary school days where he engage
                                            in most dramatic/ social activities.
                                            In 2011 he joined Federation
                                            Thearter Group of St Joseph The
                                            Worker Catholic church Awka Anambra
                                            state, where is was nurtured in
                                            stage acting and his career as a
                                            comedian started unfolding. Later
                                            joined Christ Embassy Drama Group
                                            and Anglican church thearter Group
                                            all in Awka while in studying at
                                            same time.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ceo-image" />
                </div>
            </div>
        </section>
    );
};

export default ceo;
