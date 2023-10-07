import React, { Component } from "react";
import Script from 'next/script'

export default class Navbar extends React.Component {

    render() {
        return (
          <React.Fragment>

          <div className="header header-fixed unselectable-header-animated bg-gray-300">
        <div className="header-brand">
            <div className="nav-item no-hover">
               <a href="#"><h6 className="title text-red-600 text-md font-bold">Zimmerle & Wisloff</h6></a>
            </div>
           <div className="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
         </div>
            
           <div className="header-nav" id="header-menu">
            <div className="nav-left">
              <div className="nav-item text-md">
                <a href="#about">About Us</a>
              </div>
              <div className="nav-item">
                <a href="#contact">Contact</a> 
              </div>
              <div className="nav-item">
                <a href="#board">Galerie</a> 
              </div>

               <div className="nav-item has-sub toggle-hover" id="dropdown">
                  <a className="nav-dropdown-link mr-0-md">Tasting Menu</a> 
                  <ul className="dropdown-menu dropdown-animated" role="menu">
                     <li role="menu-item"><a href="#menu">Beverages</a></li>
                     <li role="menu-item"><a href="#menu">Apps & Entrees</a></li>
                     <li role="menu-item"><a href="#menu">Desserts</a></li>
                  </ul>
               </div>
               <div className="nav-item">
                <a href="#event" >Events</a>
              </div>
              <div className="nav-right">
                 <button className="bg-black u-opacity-20 text-teal-300 text-xs font-bold btn--xs u-round-xl" id="bookbtn"><a href="#test-modal">Book Your Event</a></button>
              </div>
            </div> 
         </div>            
      </div> 

    <div className="modal modal-animated--zoom-in" id="test-modal">
    <a href="#event" className="modal-overlay close-btn" aria-label="Close"></a>
    <div className="modal-content u-text-center" role="document">

        <div className="modal-header pb-0"><a href="#event" className="u-pull-right" aria-label="Close"><span className="icon"><i className="fa-wrapper fa fa-times"></i></span></a>
            <div className="modal-title text-lg">Zimmerle & Wisloff Events</div>
            <div className="text-sm font-bold mr-3">Your Mom Likes Charcuterie</div>
        </div>

        <div className="modal-body">
          <form className="form text-xs u-center">
            <label>
              Enter your birthday:
              <input className="input--xs" type="date" name="bday" />
            </label>
             <div className="form-group text-xs">
              <label>First Name
                <input className="input--xs" type="text" placeholder="john.doe@cirrus.io" /></label>
              <label>Last Name
                <input className="input--xs" type="text" placeholder="john.doe@cirrus.io" /></label>
            </div>
            <div className="form-group-input text-xs">
              <label>Email Address
                <input className="input--xs" type="text" placeholder="john.doe@cirrus.io" /></label>
            </div> 
              <textarea className="input--xs h-10p mt-2" placeholder="Extra small (0.75rem)"></textarea>
          </form>
        </div> 

        <div className="modal-footer">
            <div className="form-section u-text-right">
                <a href="#event">
                    <button className="btn btn-primary btn--sm u-pull-left mb-2 u-opacity-60">Cancel</button>
                </a>
                <a href="#event">
                    <button className="btn btn-dark btn--sm u-pull-right mb-2 u-opacity-60">Submit</button>
                </a>
            </div>
        </div>
    </div>
</div>    
                   
<Script id="nav-scripts"> 
{`
        let navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(function (ele) {
        ele.addEventListener('click', function() {
             
        let dropDownMenu = document.getElementById("header-menu");

        ele.classList.toggle('active');
        dropDownMenu.classList.toggle('active');

        var allLinks = document.links;
        for (var i = 0, n = allLinks.length; i < n; i++) {
             allLinks[i].onclick = function () { 
               ele.classList.toggle('active');
               dropDownMenu.classList.toggle('active');
             }
        }; 
        
      });

    });       
`}
</Script>
          </React.Fragment>
        )
    }
}