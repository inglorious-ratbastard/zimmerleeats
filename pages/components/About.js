import React, { Component } from "react";

export default class About extends React.Component {

  render() {
    return (
      <React.Fragment>

        <div className="u-text-center pt-3" id="about">
          <div className="about-content" id="about-info">

            <div className="row u-center pt-6">

              <div className="col-3 w-28">
                <div className="card card--slide-up">
                  <div className="card__container">
                    <div className="card__image" id="prof_1"></div>
                  </div>
                  <div className="card__mobile-title">
                    <div className="content">
                      <div className="tile">
                        <div className="tile__container">
                          <p className="tile__title">Chef Nick Zimmerle</p>
                          <p className="tile__subtitle">Zimmerle Eats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card__body content">
                    <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
                  </div>
                  <div className="card__footer content">2 min. read 22 comments</div>
                </div>
              </div>

              <div className="col-3 w-30 m-6 font-light text-xs tracking-tight">
                <p className="">Love of traditions. It’s what has gone into every planning aspect of Zimmerle & Wisloff, including our world-class menu. Featuring southern favorites and truly inspired dishes, our menu is designed to please and tempt every palate. You can refresh your spirit thanks to our designer spaces and reignite your passion for culinary masterpieces with every brunch, lunch, dinner or private event.</p>
                <p>Nick Zimmerle and Erik Wisloff are the chefs behind Zimmerle & Wisloff's outstanding food. They bring a wealth of expertise and creativity to our historic food culture in San Antonio. The expertise at their craft continuously dazzles patrons with their phenomenal dishes. We cook for your enjoyment.</p>
                <p>Learn more about our chefs. Then, be sure to make a reservation for a table with Zimmerle & Wisloff.</p>
              </div>
              
            </div> 
          </div> 

        </div>
      </React.Fragment>
    )
  }
}