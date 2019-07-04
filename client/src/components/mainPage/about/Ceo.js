import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/img.jpg";


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
              Okonkwo Levi Tochukwu Popularly known as BLACKALBINO. CEO
              BLACKALBINO ENTERTAINMENT ( BAE). Born in the mid 90s. A comedian
              of the federal republic of Nigeria. (Standup comedian, Host,
              Compere. Event Mc and a Comic skit maker) Born and raised in Awka.
              His passion for entertaining people started at his tender age
              during his primary school where he engaged in most dramatic/social
              activities. In 2010, He joined st Patrick’s Cathedral Church
              theater group where he was nurtured in stage acting and his career
              as a comedian started unfolding. He furthered to Uchmel Acting
              Academy where he was featured in two comedy movies tittled “Naira
              Republic” and “End Time Zombies”.
            </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
