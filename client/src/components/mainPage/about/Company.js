import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Company = () => {
    return (
        <section className="section-about-company">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="heading heading-primary my-5">
                            <Flip bottom cascade>
                                The Company
                            </Flip>
                        </h3>
                        <Fade bottom>
                            <p>
                                Laugh Pattern Nigeria Started from Delta state
                                as a Comedy Program Aired at DRTV Warri. Later
                                the company was registerd with Corperate Affairs
                                Commission of Nigeria. Laugh Pattern Nigeria got
                                its first recognition 2018, when its started
                                working with most entertainment company, Hotels,
                                Event managers and awka based comedians.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
