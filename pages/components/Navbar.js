import React, { Component } from "react";

export default class Navbar extends React.Component {

    render() {
        return (
          <React.Fragment>

          <div className="header header-fixed unselectable-header-animated bg-yellow-200">
        <div className="header-brand">
            <div className="nav-item no-hover">
               <h6 className="title">Zimmerle Eats</h6>
            </div>
           <div className="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
         </div>
           <div className="header-nav" id="header-menu">
            <div className="nav-left">
              <div className="nav-item">
                <a href="#">Services</a>
              </div>
              <div className="nav-item">
                <a href="#">Contact</a>
              </div>
              <div className="nav-item">
                <a href="#">Tasting Menus</a>
              </div>
               <div className="nav-item has-sub toggle-hover" id="dropdown">
                  <a className="nav-dropdown-link">Events</a> 
                  <ul className="dropdown-menu dropdown-animated" role="menu">
                     <li role="menu-item"><a href="#">First Item</a></li>
                     <li role="menu-item"><a href="#">Second Item</a></li>
                     <li role="menu-item"><a href="#">Third Item</a></li>
                  </ul>
               </div>
              <div className="nav-right">
                 <button className="text-black text-sm font-bold btn-transparent btn--sm" id="bookbtn">Book An Event</button>
              </div> 
            </div> 
         </div>
      </div> 

          </React.Fragment>
        )
    }
}