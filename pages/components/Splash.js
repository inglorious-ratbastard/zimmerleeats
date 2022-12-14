import React, { Component } from "react";
import Script from 'next/script'

export default class Splash extends React.Component {

    render() {
        return (
          <React.Fragment>
          <Script src="https://abrokenperspective.neocities.org/zimmerle/static.js" />        

 <div className="splash bg-yellow-100" id="home">
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/eats-sl-1.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/eats-sl-2.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/eats-sl-aupoivre.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/eats-sl-3.jpg" />
   <img className="imgSlide" src="https://abrokenperspective.neocities.org/zimmerle/images/eats-sl-4.jpg" />

<a href="/media" id="media" className="u u-LR text-red-500">Media Gallery</a>

</div>

          </React.Fragment>
        )
    }
}