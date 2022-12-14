import React, { Component } from "react";
import Script from 'next/script'

export default class Menu extends React.Component {

    render() {
        return (
          <React.Fragment>
           <Script src="https://abrokenperspective.neocities.org/zimmerle/static.js" />

  <div className="w3-container w3-black w3-grayscale w3-text-amber" id="menu">

  <div className="w3-content" id="menu-content">
 
    <h6 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">The Preserved Pantry</span></h6><center><span className="w3-tag w3-wide ">Non Perishable Cuisine</span></center>

    <p> All of our products are scratch made from only the freshest ingredients, from our kitchen to your table. Our concept is based on locally sourced goods so that we may produce the finest cured, brewed, and preserved foods to serve your edacious palate. </p>
     
    {/* <div className="menu-board w3-row w3-center w3-card w3-padding w3-border"> 
      <a href="javascript:void(0)" onClick= { () => openMenu(event, 'Eat') } id="myLink">
      <div className="w3-col s6 tablink">Palatables</div>
      </a> 
      <a href="javascript:void(0)" onClick= { () => openMenu(event, 'Drinks') } >
        <div className="w3-col s6 
        tablink">Noshery</div>
      </a> 
    </div> */}
    
    <div id="Eat" className="w3-container menu w3-padding-38 w3-card w3-border">
      <h5>Fig Jam (8oz)</h5>
      <p className="w3-text-grey w3-hover-text-lime">$ 6.00</p>
    
      <h5>Apricot Jam (8oz)</h5>
      <p className="w3-text-grey">$ 6.00</p>
    
      <h5>Starwberry Preserves (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
      
      <h5>Prickly Pear Jelly (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
    
      <h5>Apple Butter (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
    
      <h5>Mandarin Orange Marmalade (8oz)</h5>
      <p className="w3-text-grey">$ 5.00</p>
      
      <h5>Whole Grain Mustard (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
      
      <h5>Bread & Butter Pickles (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
      
      <h5>Sauerkraut (16oz)</h5>
      <p className="w3-text-grey">$ 7.00</p>
      
      <h5>Kimchi (16oz)</h5>
      <p className="w3-text-grey">$ 10.00</p>
      
      <h5>Candied Jalapenos (8oz)</h5>
      <p className="w3-text-grey">$ 5.00</p>
      
    </div>

    <div id="Drinks" className="w3-container menu w3-padding-38 w3-card w3-border">
      <h5>Kombucha (16oz/33oz)</h5>
      <p style={{ fontSize: 12 + 'px' }} >Kombucha is a slightly sour, fizzy beverage made from sweetened black tea that has been fermented </p>
      <p className="w3-text-grey">$ 5.00/$8.00</p>

      <h5>Jun (16oz/33oz)</h5>
      <p style={{ fontSize: 12 + 'px' }} >Kombucha is a slightly sour, fizzy beverage made from sweetened black tea that has been fermented </p>
      <p className="w3-text-grey">$ 7.00/$12.00</p>
    
      <h5>Ginger Beer (16oz)</h5>
      <p style={{ fontSize: 12 + 'px' }} >In comparison to our other fermented treats, ginger beer is more robust in flavor with a spicy quality.</p>
      <p className="w3-text-grey">$ 6.00</p>
      
      <p style={{ fontSize: 15 + 'px' }} >* Inquire about the hodgepodge of accessible flavors for our brewed goods.</p>
    
    </div>  
    
    <br />
    <center> 
      
  <button onClick= { () => myFunction('Demo1') }className="w3-btn w3-block w3-black w3-center">Cured</button>
         <div id="Demo1" className="w3-container w3-hide">
            <h6>Section 1</h6>
            <p>Some text..</p>
        </div>
      
  <button onClick= { () => myFunction('Demo2') } className="w3-btn w3-block w3-black w3-center">Canned</button>
         <div id="Demo2" className="w3-container w3-hide">
            <h6>Section 2</h6>
            <p>Some text..</p>
         </div>
      
  <button onClick= { () => myFunction('Demo3') } className="w3-btn w3-block w3-black w3-center">Brewed</button>
         <div id="Demo3" className="w3-container w3-hide">
            <h6>Section 3</h6>
            <p>Some text..</p>
      </div>
      
  <button onClick= { () => myFunction('Demo4') } className="w3-btn w3-block w3-black w3-center">Spreads</button>
         <div id="Demo4" className="w3-container w3-hide">
            <h6>Section 4</h6>
            <p>Some text..</p>
         </div>
  <button onClick= { () => myFunction('Demo5') } className="w3-btn w3-block w3-black w3-center">Artisinal</button>
         <div id="Demo5" className="w3-container w3-hide">
            <h6>Section 5</h6>
            <p>Some text..</p>
         </div>         
    </center>
    <br /><br />
                  
  </div>
</div>  
        
          </React.Fragment>
        )
    }
}