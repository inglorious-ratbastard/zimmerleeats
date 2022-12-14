import React, { Component } from "react";

export default class Contact extends React.Component {
      render() {  
        return (
          <React.Fragment>

  <div className="w3-container w3-black w3-grayscale w3-small w3-text-amber" id="contact">

  <div className="w3-content" id="contact-info">
  
    <h6 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"> From Board to Table</span></h6><center><span className="w3-tag w3-wide ">Connect With Our Kitchen</span></center>

 <p >Hopefully our scratch made goods will find their way into your own kitchen. To make that happen you can contact us thru any of the necessary means below.</p>

    <center>
     <p>Follow us on <a href="#social" style= {{ color: 'white' }} >social media</a> or contact us directly <br />Schedule an order or event with us thru Google</p>

    <label htmlFor="datebk"><strong>Book Your Order With Us</strong></label>
    <input className="w3-text-amber w3-tiny" type="date" name="datebk" id="datebk" />  
    </center>

    <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    
<center><p><strong>We Would Love To Hear From You </strong></p></center>
    <p>Let us know what you think! Ask about menu items and their availability, particular food allergies, or simply just leave us a kind word. </p>
    
  <form className="contact-form" id="contact-form" 
action="mailto:phoenixfiremind77@gmail.com" method="post" encType="text/plain" style={{ marginTop: 35 + 'px' }}>
      
  <p><input className="w3-input w3-black w3-border-bottom" type="text" placeholder="Name" required name="Name" /></p>

  <p><input className="w3-input w3-black w3-border-bottom" type="text" placeholder="Email" required name="Email" /></p>

  <p><input className="w3-input w3-black w3-border-bottom"  type="text" placeholder="Subject" required name="Subject" /></p>

  <p><input className="w3-input w3-black w3-border-bottom" type="text" placeholder="Message" required name="Message" /></p>

  <center><p><button className="w3-button w3-black w3-small w3-border w3-hover-lime" type="submit" style={{ 
marginTop: 35 + 'px' }} >SEND MESSAGE</button></p></center>
    </form>
    
  <div className="container">
    <div className="faux-info" style = {{ marginTop: 75 + 'px', maxwWidth: 950 + 'px' }} ></div>
    <div className="main">  
      <div className="w3-container">
        <h1 className="eat-event-top w3-medium w3-center w3-animate-fading"><a href="#events">Private Chef Events Are Available</a></h1> 
        <h1 className="eat-event-bot w3-medium w3-center w3-animate-fading"><a href="#events">Click Here To Learn More</a></h1> 
      </div>  
    </div> 
    <div className="faux-info" style = {{ marginTop: 45 + 'px', maxWidth: 950 + 'px' }} ></div>
  </div>
         
    </div> 
</div> 
          </React.Fragment>
        )
    }
}