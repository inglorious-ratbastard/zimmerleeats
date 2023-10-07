import React, { Component } from "react";
import Script from 'next/script'

export default class Footer extends React.Component {

  render() {
      return (
        <React.Fragment>
    
<footer className="footer bg-black u-opacity-80" id="footer">

     <div className="text-white" id="topper">
       <button className="btn-transparent text-white"><i className="fa fa-bars" id="foot_tog"></i></button>
     </div>
    <h6 className="footer__title text-white font-light uppercase">Zimmerle & Wisloff</h6>
  
  <div className="content bg-black u-opacity-80"> 
    <div className="divider"></div> 
       <div className="row">
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
                        <li className="footer__list-item">Company Information</li>
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
      <p className="subtitle bg-black">Zimmerle & Wisloff © 2023.</p> 
          </div>
    </div>
    
</footer>

<Script id="foot-scripts"> 
{`

const footer = document.getElementById('footer');
var status = footer.className.includes('active'); 
document.getElementById("foot_tog").addEventListener("click", function() {
      if(status === "false"){
        footer.style.height = "48vh";
        footer.scrollIntoView({ block: "end" });
        footer.classList.add("active");
        status = !!"false"; 
    } else if(status == "true"){
        footer.style.height = "133.6px";
        status = !status;
      } 
}); 

`}
</Script>
          
          </React.Fragment>
       )
    }
}