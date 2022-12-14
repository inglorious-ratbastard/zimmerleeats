import React, { Component } from "react";

export default class Board extends React.Component {

    render() {
        return (
          <React.Fragment>
        
 <div className="w3-container w3-black w3-small w3-grayscale w3-text-amber" id="board">

<div className="w3-content" id="board-info">
 
 <h6 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">The Tasting Board</span></h6>
<center><span className="w3-tag w3-wide">Charcuterie Delectables</span></center>

 <p> All of our products are scratch made from only the freshest ingredients, from our kitchen to your table. Our concept is based on locally sourced goods so that we may produce the finest cured, brewed, and preserved foods to serve your edacious palate. </p>

<div className="w3-row w3-padding-16 w3"> 

<center>
<div className="w3-col-padding s1 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>Artisan Cheese Board</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">

  <p>Comes with <u>Three</u> of our Artisan Cheeses and <u>Three</u> of our choice hand-crafted preserves along with a variety of accompaniments <br/> from other locally sourced purveyors.</p>

  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{ width: '50%' }} >Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{ width: '50%' }} >Add to Cart</button>
  </footer>
</div>

{/* <div className="w3-col-padding s1 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>Personal Charcuterie Board</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">
  <p>Lorem ipsum...</p>
  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{width: '50%'}}>Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{width: '50%'}}>Add to Cart</button>
  </footer>
</div> */}

<div className="w3-col-padding s2 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>4 Meat & 2 Cheese Board</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">

  <p>Comes with <u>Four</u> of our Select Cured Meats <br/> and <u>Two</u> of our Artisan Cheeses along with <br/> <u>Three</u> of our choice hand-crafted preserves  <br/> and variety of accompaniments.</p>

  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{ width: '50%' }} >Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{ width: '50%' }} >Add to Cart</button>
  </footer>
</div> 

<div className="w3-col-padding s2 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>3 Meat & 3 Cheese Board</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">

  <p>Comes with <u>Three</u> of our Select Cured Meats <br/> and <u>Three</u> of our Artisan Cheeses along with <br/> <u>Three</u> of our choice hand-crafted preserves  <br/> and variety of accompaniments.</p>

  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{ width: '50%' }} >Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{ width: '50%' }} >Add to Cart</button>
  </footer>
 </div>

<div className="w3-col-padding s1 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>The Grazing Board</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">

  <p>Comes with <u>Five</u> of our Select Cured Meats <br/> and <u>Three</u> of our Artisan Cheeses along with <br/> <u>Three</u> of our choice hand-crafted preserves <br/> and variety of accompaniments.</p>

  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{ width: '50%' }} >Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{ width: '50%' }} >Add to Cart</button>
  </footer>
</div>

 <div className="w3-col-padding s2 w3-card-4 w3-padding-16">
  <header className="card-top w3-container-small w3-black w3-border w3-center">
  <h6>Dessert Delicacies</h6>
  </header>
  <div className="card-content w3-container-small w3-black w3-border w3-center">

  <p>Finish your experience with one of our <br /> homestyle sweet palatable treats :</p>
  
  <div className="des-bx">
  <label id="bd-label"><input id="bd-input" type="checkbox" />Creme Brulee</label>
  <label id="bd-label"><input id="bd-input" type="checkbox" />Apple Crisp</label>
  <label id="bd-label"><input id="bd-input" type="checkbox" />Peanut Brittle</label>
  <div style={{ marginBottom: 50 + 'px' }} ></div>
  </div>

  </div>
  <footer className="card-foot w3-container-small w3-black w3-border w3-center">
   <button className="w3-button w3-black w3-third w3-hover-lime" style={{ width: '50%' }} >Add to Wish List</button>
   <button className="w3-button w3-black w3-hover-lime" style={{ width: '50%' }} >Add to Cart</button>
  </footer>
 </div>

<p style={{ marginTop: 50 + 'px' }} >All of our charcuterie boards come with your choice from our House Select meats, cheeses, and varied available preserves. The local fruits, herbs, and various side accompaniments that we use are partially subject to local sourcing of the product.</p> 
<p>To see a complete list of the items that we offer on our boards use the clickable link below. Our products are subject to change depending on necessity or by request. We assume otherwise that you prefers Chef's Choice items if not directly specified.</p>   
  
<div className="w3-dropdown-hover" style= {{ marginTop: 30 + 'px', color: 'white' }}>Meats, Cheeses, & Accompaniments
  <div className="w3-dropdown-content w3-card-4" 
  style= {{ width: 'max-content', margin: 'auto', left: -15 + '%', position: 'relative', left: 1 + 'px' }} >
    <div className="w3-container w3-black w3-border">
      <p>London is the capital city of England.</p>
      <p>It is the most populous city in the UK.</p>

      <p>London is the capital city of England.</p>
      <p>It is the most populous city in the UK.</p>

      <p>London is the capital city of England.</p>
      <p>It is the most populous city in the UK.</p>
    </div>
  </div>
</div>
</center>
</div>
<center><img 
src="https://s.hdnux.com/photos/01/23/64/63/21974237/5/rawImage.jpg" className="about-pop-mn w3-padding-32" style={{ opacity: 0.9, marginTop: 30 + 'px' }} id="ysa22" /></center>
<center><span className="w3-tag w3-padding w3-small w3-black">
Nominated and Ranked in the Top 5 for<br/>
Charcuterie/Charcuterie Boards  
</span></center>
 </div>
</div>
        
          </React.Fragment>
        )
    }
}