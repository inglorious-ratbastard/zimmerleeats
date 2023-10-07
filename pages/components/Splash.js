import React, { Component } from "react";
import Script from 'next/script'

export default class Splash extends React.Component {

    render() {
        return (
          <React.Fragment>
            
 <div className="splash bg-indigo-100 u-opacity-80 u-center" id="home">

   <div className="arrows prev"></div>
   <div className="arrows next"></div>

   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/zimloff/343447134_927429975181261_6321448419159931606_n.jpg" />
   
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/zimloff/343388352_275652984994984_3223184322726869006_n.jpg" />
   
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/zimloff/345075085_1183538945662533_4737205294488671669_n.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/zimloff/343035284_195264439587563_8120295560114411599_n.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/zimloff/343357856_6936990832982609_9105958588791735253_n.jpg" />
   
</div>
            
<Script id="nav-scripts"> 
{`

    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("imgSlide");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 9000);    
    }
    
`}
</Script>            
          </React.Fragment>
        )
    }
}