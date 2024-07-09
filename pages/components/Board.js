import React, { Component } from "react";

export default class Board extends React.Component {

    render() {
        return (
          <React.Fragment>
        
<div className="u-text-center pt-5" id="board">
  <div className="album-content" id="album-info"> 

  <div className="row u-center mt-6">

  <div className="col-sm-3 u-center mt-3 pb-5 pr-6">
    <div className="spandex u-center">
      <h6>The Chef's Gallerie</h6> 
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor nunc id efficitur interdum. Mauris eget mattis orci, sed rhoncus orci. Ut fringilla neque sit amet elit convallis, at sagittis enim semper. Quisque malesuada, ex in sodales iaculis, nunc urna consequat ipsum, vel gravida orci neque eget felis. Pellentesque iaculis nunc sed turpis ornare, vitae lobortis dolor lobortis. Donec cursus enim vel metus condimentum, sit amet iaculis felis pulvinar. Nullam mauris sem, gravida nec purus vel, sollicitudin laoreetisl. Donec sed purus ligula. In eu accumsan diam. Donec semper velit quis nibh vestibulum, sit amet dapibus est ultricies.</span> 
    </div>
  </div>

  <div className="col-sm-3">
      <div className="u-center">
        <div className="card w-80p">
      <div className="card__container">
        <div className="card__image" id="gal_1"></div>
        <div className="card__title-container">
           <p className="title">Title</p>
           <span className="subtitle">Subtitle</span> 
  </div>
      </div>
      <div className="content">
          <p>Text and other content belong here, inside a <code>content</code> div.</p>
      </div>
      <div className="card__action-bar bg-gray-600 u-opacity-60 u-center">
        <button className="btn-link bg-black text-white outline">Go here</button>
      </div>
     </div>
    </div>
  </div>
    
  <div className="col-sm-3">
       <div className="u-center">
        <div className="card w-80p">
      <div className="card__container">
        <div className="card__image" id="gal_2"></div>
        <div className="card__title-container">
           <p className="title">Title</p>
           <span className="subtitle">Subtitle</span></div>
      </div>
      <div className="content">
          <p>Text and other content belong here, inside a <code>content</code> div.</p>
      </div>
      <div className="card__action-bar bg-gray-600 u-opacity-60 u-center">
        <button className="btn-link bg-black text-white outline">Go here</button>
      </div>
     </div>
    </div>
  </div>
    
  <div className="col-sm-3">
     <div className="u-center">
        <div className="card w-80p">
      <div className="card__container">
        <div className="card__image" id="gal_3"></div>
        <div className="card__title-container">
           <p className="title">Title</p>
           <span className="subtitle">Subtitle</span></div>
      </div>
      <div className="content">
          <p>Text and other content belong here, inside a <code>content</code> div.</p>
      </div>
      <div className="card__action-bar bg-gray-600 u-opacity-60 u-center">
        <button className="btn-link bg-black text-white outline">Go here</button>
      </div> 
     </div> 
    </div> 
  </div>

</div> 
  
  </div>
</div>
        
          </React.Fragment>
        )
    }
}