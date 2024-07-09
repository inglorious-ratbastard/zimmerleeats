import React, { Component } from "react";
import Script from 'next/script';  

export default class Splash extends React.Component {  

    render() {
        return (   
          <React.Fragment> 

 <div className="splash bg-indigo-100 u-opacity-80 u-center" id="home"> 
 
 <div className="slider">	 
     <input type="radio" name="slides" id="01"  defaultChecked readOnly />
     <input type="radio" name="slides" id="02" />
     <input type="radio" name="slides" id="03" />
     <input type="radio" name="slides" id="04" />
     <input type="radio" name="slides" id="05" />
     <input type="radio" name="slides" id="06" />
     <input type="radio" name="slides" id="07" />
     <input type="radio" name="slides" id="08" />

     <input type="radio" id="previous" name="navigation" />
     <input type="radio" id="next" name="navigation" />
     <label htmlFor="previous" className="nav left"></label>
     <label htmlFor="next" className="nav right"></label>

     <div className="preview">
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
       <div className="slide"></div>
     </div>
       
     <input id="open" type="checkbox" />
     <label htmlFor="open"></label>

     <div className="thumbs">		
       <label className="thumbnail" htmlFor="01"></label>
       <label className="thumbnail" htmlFor="02"></label>
       <label className="thumbnail" htmlFor="03"></label>
       <label className="thumbnail" htmlFor="04"></label>
       <label className="thumbnail" htmlFor="05"></label>
       <label className="thumbnail" htmlFor="06"></label>
       <label className="thumbnail" htmlFor="07"></label>
       <label className="thumbnail" htmlFor="08"></label>
     </div>		
   </div>   

   <h6 className="socials u-center text-white text-xs" >Join Me on Social Media to get the Latest Zimmerle Eats Content</h6> 
   <ul className="socials u-center pb-3">
      <li className="icon facebook"> 
        <span className="tooltip">Facebook</span>
        <span><a href="https://www.facebook.com/profile.php?id=100077852178819"><i className="fab fa-facebook-f"></i></a></span> 
      </li>
      <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><a href="https://www.instagram.com/zimmerleeats/"><i className="fab fa-instagram"></i></a></span></li>
      <li className="icon youtube">
        <span className="tooltip">Youtube</span>
        <span><a href="https://www.youtube.com/@zimmerleeats800"><i className="fab fa-youtube"></i></a></span>
      </li>
    </ul>
   
 </div>
            
<Script id="splash-scripts"> 
{`

 const cb = document.getElementById('open');
 document.getElementById('open').onclick = function() {
    if(cb.checked === false){
       document.getElementById("previous").disabled = true;
       document.getElementById("next").disabled = true;
     };  
     if(cb.checked === true){
       document.getElementById("previous").disabled = false;
       document.getElementById("next").disabled = false;
     };  
 }; 
    
`}
</Script>            
          </React.Fragment>
        )
            } 
}
