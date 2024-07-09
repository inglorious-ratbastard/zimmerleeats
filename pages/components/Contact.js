import React, { Component } from "react";

export default class Contact extends React.Component {
      render() {  
        return (
          <React.Fragment>

  <div className="u-text-center pt-8" id="contact">
    <div className="contact-content" id="contact-info">
      
  <form className="u-text-center" id="contfr">
      <div className="row u-center level w-50p">
    <div className="col-sm-3 level-item">
        <p className="m-0 text-xs">Name:</p>
    </div>
    <div className="col-sm-10 level-item"><input className="text-xs" type="name" name="name" defaultValue="John Doe"  autoComplete="off" /></div>
</div>

<div className="row u-center level w-50p">
    <div className="col-sm-3 level-item">
        <p className="m-0 text-xs">Email:</p>
    </div>
    <div className="col-sm-10 level-item"><input className="text-xs" type="email" name="mail" defaultValue="john.doe@cirrus.io"/></div>
</div>

<div className="row u-center level  w-50p">
    <div className="col-sm-3 level-item">
        <p className="m-0 text-xs">Telephone:</p>
    </div>
    <div className="col-sm-10 level-item"><input className="text-xs" type="tel" name="phone" defaultValue="1-(800)-777-7777" autoComplete="off" /></div>
</div>

<div className="row u-center level w-50p">
    <div className="col-sm-3 level-item">
        <p className="m-0 text-xs">Event Date:</p>
    </div>
    <div className="col-sm-10 level-item"><input className="text-xs" type="date" name="date" defaultValue="2017-03-21"/></div>
</div>

<div className="row u-center level w-40p">
<textarea type="text" name="input"></textarea>
<input type="submit" className="btn--sm btn-dark btn-animated pull-right mt-3"/>
</div>
</form>

    </div> 
</div> 
          </React.Fragment>
        )
    }
}