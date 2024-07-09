import React, { Component } from "react";
import Script from 'next/script'

export default class Footer extends React.Component {

  render() {
      return (
        <React.Fragment>
    
<footer className="footer bg-gray-700 u-opacity-90" id="footer">

     <div className="text-white bg-gray-700 pt-1" id="topper">
     <button className="btn-transparent text-white"><i className="fa fa-utensils fa-lg pt-3" id="foot_tog"></i></button> 
     </div>
    <h6 className="footer__title text-white font-semibold uppercase">Zimmerle Eats</h6>
  
  <div className="content bg-gray-700"> 
    <div className="divider"></div> 
       <div className="row pt-1">
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">Home</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Sign Up</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Downloads</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">Information</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Contact Us</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Reviews</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div className="col-4">
                <ul className="no-bullets">
                    <a href="!#">
                        <li className="footer__list-item">FAQ</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Help Desk</li>
                    </a>
                    <a href="!#">
                        <li className="footer__list-item">Forums</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
        </div>
           <div className="footnote pt-2">
      <p className="subtitle bg-gray-700 pt-1 text-yellow-400">Zimmerle Eats © 2024.</p> 
          </div>
    </div>
    
</footer>

<Script id="foot-scripts"> 
{`

const footer = document.getElementById('footer');
var status = footer.className.includes('active'); 
document.getElementById("foot_tog").addEventListener("click", function() {
      if(status === "false"){
        footer.style.height = "38%";
        footer.scrollIntoView({ block: "end" });
        footer.classList.add("active");
        status = !!"false"; 
    } else if(status == "true"){ 
        footer.style.height = "5.5rem";
        status = !status;
      } 
}); 

`}
</Script>
          
          </React.Fragment>
       )
    }
}
