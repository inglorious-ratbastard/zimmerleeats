import React, { Component } from "react";

export default class Board extends React.Component {

    render() {
        return (
          <React.Fragment>
        
<div className="u-text-center pt-8" id="board">
  <div className="album-content" id="album-info">

  <div className="row u-center mt-0">
    
  <div className="col-sm-3">
      <div className="u-center">
        <div className="card w-70p">
      <div className="card__container">
        <div className="card__image" id="gal_1"></div>
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
        <div className="card w-70p">
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
        <div className="card w-70p">
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