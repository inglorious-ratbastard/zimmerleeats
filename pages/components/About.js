import React, { Component } from "react";

export default class About extends Component {
  state = {
    flipped: false,
    bodyExpanded: false,
  };

  toggleFlip = () => {
    this.setState(prev => ({ flipped: !prev.flipped }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="u-text-center pt-3" id="about">
          <div className="about-content" id="about-info">
            <div className="row u-center pt-6">

              <div className="col-3 w-28 pt-6">
                <div
                  className={`flip-card ${this.state.flipped ? "is-flipped" : ""}`}
                  onClick={this.toggleFlip}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card card--slide-up">
                        <div className="card__container">
                          <div className="card__image" id="prof_1"></div>
                        </div>

                        <div className="card__mobile-title">
                          <div className="content">
                            <div className="tile">
                              <div className="tile__container">
                                <p className="tile__title">Chef Nick Zimmerle</p>
                                <p className="tile__subtitle">@ZimmerleEats</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card__body content">
                          <p>From intimate dinners to curated gatherings, our private chef and charcuterie services bring restaurant-level craft into your space. Thoughtfully sourced ingredients, seasonal menus, and artfully composed boards turn every event into a memorable, effortless experience.</p>
                        </div>

                        <div className="card__footer content">
                          Click to learn more
                        </div>
                      </div>
                    </div>

                    <div className="flip-card-back">
                      <div className="card card--slide-up">
                        <div className="card__container">
                          <div className="card__image" id="prof_2"></div>
                        </div>

                        <div className="card__mobile-title">
                          <div className="content">
                            <div className="tile">
                              <div className="tile__container">
                                <p className="tile__title">Culinary Philosophy</p>
                                <p className="tile__subtitle">Our Approach</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card__body content">
                          <p>Rooted in tradition and guided by creativity, our approach is hands-on and intentional. Every dish is made with respect for classic technique while embracing modern flavors—simple, honest food designed to connect people and elevate the moment.</p>
                        </div>

                        <div className="card__footer content">
                          Click to go back
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-3 w-30 m-6 font-light text-xs tracking-tight">
                <p className="about-text">Love of traditions. It’s what has gone into every planning aspect of Zimmerle & Wisloff, including our world-class menu. Featuring southern favorites and truly inspired dishes, our menu is designed to please and tempt every palate. You can refresh your spirit thanks to our designer spaces and reignite your passion for culinary masterpieces with every brunch, lunch, dinner or private event.</p>
                <p className="about-text">Nick Zimmerle and Erik Wisloff are the chefs behind Zimmerle & Wisloff's outstanding food. They bring a wealth of expertise and creativity to our historic food culture in San Antonio. The expertise at their craft continuously dazzles patrons with their phenomenal dishes. We cook for your enjoyment.</p>
                <p className="about-text">Learn more about our chefs. Then, be sure to make a reservation for a table with Zimmerle & Wisloff.</p>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
