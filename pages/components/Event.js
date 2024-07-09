import React, { Component } from "react";

export default class Event extends React.Component {

    render() {
        return (
          <React.Fragment>
          
<div className="u-text-center pt-2" id="event">
   <div className="event-content mt-6" id="event-info">

   <div className="row u-center">
      <div className="col-md-4">
        <p className="col-10 text-sm leading-loose"> 
     Pellentesque suscipit nunc in consequat ullamcorper. Integer blandit non dui eget aliquet. Aenean tincidunt nulla mauris, ut faucibus odio pretium nec. Nullam ut lacus pharetra, sollicitudin erat eu, sagittis odio. Integer dui eros, ullamcorper a felis ut, ultrices consequat felis. Aliquam iaculis sed urna nec feugiat. In ac arcu condimentum, vestibulum dolor eu, feugiat massa. Mauris vitae tristique erat, ac commodo urna. Vivamus ut lorem pellentesque, euismod dui nec, vehicula dolor. 
  </p>
      </div>
     
      <div className="col-xs-6 u-text-center">
        <div className="tree">
    <div className="tree-item">
        <input type="radio" id="tree5" className="u-none" name="radioTree" />
        <label className="tree-item-header" htmlFor="tree5"><span className="icon"><i className="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Trees</label>
        <div className="tree-item-body">
            <ul className="menu">
                <li className="menu-item"><a href="!#">Oak</a></li>
                <li className="menu-item"><a href="!#">Birch</a></li>
            </ul>
        </div>
    </div>
</div>
<div className="tree">
    <div className="tree-item">
        <input type="radio" id="tree6" className="u-none" name="radioTree" />
        <label className="tree-item-header" htmlFor="tree6"><span className="icon"><i className="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Fruits</label>
        <div className="tree-item-body">
            <ul className="menu">
                <li className="menu-item"><a href="!#">Mangosteen</a></li>
                <li className="menu-item"><a href="!#">Durian</a></li>
                <li className="menu-item"><a href="!#">Jabuticaba</a></li>
            </ul>
        </div>
    </div>
</div>
<div className="tree">
    <div className="tree-item ml-1">
        <input type="radio" id="tree7" className="u-none" name="radioTree" />
        <label className="tree-item-header" htmlFor="tree7"><span className="icon"><i className="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Flowers</label>
        <div className="tree-item-body">
            <ul className="menu">
                <li className="menu-item"><a href="!#">Jade Vine</a></li>
                <li className="menu-item"><a href="!#">Ghost Orchid</a></li>
                <li className="menu-item"><a href="!#">Corpse Flower</a></li>
            </ul>
        </div>
    </div>
</div>
      </div>
   </div>

    <div className="row">
      <div className="col-xs-12 u-center">
        <img className="img-contain u-round-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSAUFpJaSF18nBsmwtyR2_M0t4kZ4sRxSMA&usqp=CAU" />
      </div>
    </div>
     
    <div className="row u-text-center ml-1">
        <div className="col-xs-6">
          <ul className="u-text-center no-bullets">
              <li>Apple</li>
              <li>Google</li>
              <li>Facebook</li>
              <li>Microsoft</li>
          </ul>
        </div>
      
        <div className="col-md-4 u-center ml-8">
            <p className="col-10 ml-8 text-sm leading-loose"> 
     Pellentesque suscipit nunc in consequat ullamcorper. Integer blandit non dui eget aliquet. Aenean tincidunt nulla mauris, ut faucibus odio pretium nec. Nullam ut lacus pharetra, sollicitudin erat eu, sagittis odio. Integer dui eros, ullamcorper a felis ut, ultrices consequat felis. Aliquam iaculis sed urna nec feugiat. In ac arcu condimentum, vestibulum dolor eu, feugiat massa. Mauris vitae tristique erat, ac commodo urna. Vivamus ut lorem pellentesque, euismod dui nec, vehicula dolor. 
  </p>
        </div>
    </div>

   </div>
  </div>
          </React.Fragment>
        )
    }
}