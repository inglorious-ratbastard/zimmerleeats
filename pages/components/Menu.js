import React, { Component } from "react";
import Script from 'next/script'

export default class Menu extends React.Component {

    render() {
        return (
          <React.Fragment>
           <Script src="https://abrokenperspective.neocities.org/zimmerle/static.js" />

  <div className="u-text-center pt-8 bg-black text-gray-300 u-opacity-80" id="menu">

  <div className="menu-cont" id="menu-content">
   <h6 className="mt-3 text-md">The Tasting Menu</h6>
  
                  
  </div>
</div>  
        
          </React.Fragment>
        )
    }
}