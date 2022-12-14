import React, { Component } from "react";

export default class About extends React.Component {

    render() {
        return (
          <React.Fragment>
          
<div className="w3-black w3-grayscale w3-large w3-text-amber" id="about">

<div className="w3-container w3-small" id="about">
  <div className="w3-content" id="about-info">
  
    <h6 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Zimmerle Brews & Preserves</span></h6><center><span className="w3-tag w3-wide ">A Shareable Passion for Food</span></center>

      <p> Zimmerle Brews And Preserves was created at home, originally as a hobby, and is now available for everyone to enjoy. All of our products are scratch made from only the freshest ingredients, from our kitchen to your table. Our concept is based on locally sourced goods to produce the finest cured, brewed, and preserved foods to serve your edacious palate. </p>
    <p>In addition to our <a href="#menu" style={{ color: 'white' }} >non-perishable pantry</a> and brewed menu items, we serve up a variety of spreadable, pickled, and <a href="#board" style={{ color: 'white' }}>charcuterie</a> delectables for your enjoyment. We are also working on expanding our kitchen to produce various rolled, baked, and other hand-crafted foodstuffs. </p>
  </div> 
</div> 

    <center>
    <div className="w3-container w3-small">
    <button id="disbtn" className="w3-btn w3-black" onClick={ () => document.getElementById('id01').style.display='block' } >Disclaimer</button>
       <div id="id01" className="w3-panel w3-black w3-display-container w3-round">
         <span onClick={ () => document.getElementById('id01').style.display='none' }  className="w3-button w3-display-topright w3-hover-black">[X]</span>
         <h6>Product Information</h6>
        <p>Our food products are made in a home kitchen and are <b>not</b> inspected by the <i>Department of State Health Services</i> or a local <i>Health Department</i>. Consume at your own discretion.</p>
       </div>
     </div>   
     </center>

<div className="w3-container w3-small" id="about">
   <div className="w3-content" id="about-info">
    <p>Zimmerle Brews And Preserves is a family owned and run business located in San Antonio, Texas. We strive to bring you the finest products derived from the best local purveyors. This is our focus and why we continue to  work with and support other community kitchens so that our products are also a reflection of their own hard work. </p>
  </div>
</div>
  
<center><img src="https://abrokenperspective.neocities.org/zimmerle/images/284906844_1833869830293176_6789239311805972741_n.jpg" className="about-pop-mn w3-padding-32" style={{ width: 500 + 'px', maxWidth: 270 + 'px', maxHeight: 295 + 'px', width: 'auto', height: 'auto', imageRendering: 'high-quality' }} id="chfpop" /></center>
<center>
<span id="chfpopt" className="w3-tag w3-padding w3-small w3-black">
Nick Zimmerle, Chef de Cuisine <br/> Zimmerle Brews & Preserves <br/> Zimmerle Eats
</span>
</center>

</div>
          </React.Fragment>
        )
    }
}