import React, { Component } from "react";

class singleNewsFeed extends Component {
  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <main>
        <header className="single-event__header d-flex align-items-center">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col text-white">
                <h1 className="h1 single-event__header--heading">
                  This is a NewsFeed Title
                </h1>
                <p className="single-event__header--time mt-5">
                  <span className="mr-2"><i class="far fa-clock"></i></span>JUNE 23, 2019 <span className="ml-4 mr-2"><i class="far fa-bookmark"></i></span> 111 VIEWS
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="section-single-event">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="single-event__text py-5">
                  The Nigerian Society for Infection Control (NSIC) is
                  organizing her 2019 Scientific Conference with the theme: ”
                  More active and focused Infection Prevention and Control in
                  healthcare delivery”. <br /> 15th – 16th August 2019 This is a
                  call for abstracts for presentations at the conference.
                  Sub-themes include the following: Antimicrobial Resistance and
                  Antimicrobial Stewardship Neonatal infections WASH Surgical
                  site infection.
                  <br /> ABSTRACT SUBMISSION GUIDELINES All abstracts must be
                  submitted electronically through the NCIC 2019 Abstract Portal
                  All abstracts must be submitted in English. Abstracts in other
                  languages will not be accepted.
                  <br /> The final deadline for submission of abstracts is July
                  22nd, 2019. All abstracts will be reviewed by the Scientific
                  Committee and final decision on whether it will be selected
                  for oral or poster presentation will depend on the scientific
                  content, topic and quality of the abstract.
                  <br /> Maximum word count for abstracts is 250 words excluding
                  subheadings Abstracts must be structured and formatted into
                  Introduction/Background, Methods, Results and Conclusions.
                  Notification of acceptance will be e-mailed to the
                  main/presenting author The presenting author must be
                  registered for the conference.
                  <br /> Failure to register for the conference by the
                  presenting author will automatically imply that the abstract
                  will NOT be included in the book of abstracts. REGISTRATION
                  Early bird registration at N35,000 and N25, 000 for students
                  till August 1st, 2019.
                  <br />
                  N40,000 thereafter and at the conference venue. Payment should
                  be into the Society account Bank Name: Access Bank Plc Account
                  Name: Nigerian Society for Infection Control Account Number:
                  0806093983 After payment please send payment evidence to:
                  nicanigeria@gmail.com CONFERENCE VENUE Ostra Hotel and Hall 1
                  Ostras Plant, Off Otunba Jobi Fele Way, CBD Alausa, Ikeja
                  ENQUIRIES For more information please see the conference
                  posters and flyers, visit the NSIC website (www.nsic.com.ng)
                  or call 08037861572, 08023163319 Chairman LOC
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default singleNewsFeed;
