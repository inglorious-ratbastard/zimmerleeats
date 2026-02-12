'use client'
import React from "react";
import Script from 'next/script'

export default class Navbar extends React.Component {
      constructor(props) {
      super(props);
      this.state = { showModal: false };
    }

    openModal = () => {
      this.setState({ showModal: true });
      document.body.style.overflow = 'hidden';
    };

    closeModal = () => {
      this.setState({ showModal: false });
      document.body.style.overflow = 'auto';
    };

    scrollToSection = (id) => (e) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      const menu = document.getElementById("header-menu");
      const btn = document.getElementById("header-btn");

      if (menu && btn) {
        menu.classList.remove("active");
        btn.classList.remove("active");
      }
    };

    scrollToBoard = (accordionIndex) => (e) => {
      e.preventDefault();

      const el = document.getElementById("board");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      window.dispatchEvent(new CustomEvent("openAccordion", { detail: accordionIndex }));

      const menu = document.getElementById("header-menu");
      const btn = document.getElementById("header-btn");
      if (menu && btn) {
        menu.classList.remove("active");
        btn.classList.remove("active");
      }
    };


    render() {
        return (
          <React.Fragment>

        <div className="header header-fixed unselectable-header-animated bg-gray-700">
        <div className="header-brand">
            <div className="nav-item no-hover">
               <a onClick={this.scrollToSection("home")}><h6 className="title text-md font-bold">Zimmerle Eats</h6></a>
            </div>
           <div className="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
         </div>
            
           <div className="header-nav" id="header-menu">
            <div className="nav-left">
              <div className="nav-item text-md no-hover">
                <a onClick={this.scrollToSection("about")} >About Chef</a>
              </div>
              <div className="nav-item no-hover">
                <a onClick={this.scrollToSection("service")} >Services</a> 
              </div>
              <div className="nav-item no-hover">
                <a onClick={this.scrollToSection("gallery")} >Gallerie</a> 
              </div>

               <div className="nav-item has-sub toggle-hover no-hover" id="dropdown">
                  <a className="nav-dropdown-link" onClick={this.scrollToSection("board")}>Tasting Board</a> 
                  <ul className="dropdown-menu dropdown-animated bg-gray-700" role="menu">
                     <li role="menu-item"><a onClick={this.scrollToBoard(0)} >Beverages</a></li>
                     <li role="menu-item"><a onClick={this.scrollToBoard(1)} >Apps & Entrees</a></li>
                     <li role="menu-item"><a onClick={this.scrollToBoard(2)} >Desserts</a></li>
                  </ul>
               </div>
               <div className="nav-item no-hover">
                <a onClick={this.scrollToSection("event")} >Events</a>
              </div>
              <div className="nav-right">
                 <button
                  onClick={this.openModal}
                  className="bg-teal-400 u-opacity-30 text-white text-xs font-bold btn--xs u-round-xl ml-6"
                >
                  Book Your Event
                </button>
              </div>
            </div> 
         </div>            
      </div> 

      {this.state.showModal && (
        <div className="header-modal">
          <div className="modal-overlay" onClick={this.closeModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={this.closeModal}>✕</button>

              <h2 className="text-lg font-bold mb-3">Book Your Event</h2>

              <form className="modal-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" />

                <select required>
                  <option value="">Event Type</option>
                  <option>Private Dinner</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Other</option>
                </select>

                <input type="date" required />
                <input type="number" placeholder="Number of Guests" />

                <textarea placeholder="Tell us about your event..." rows="4"></textarea>

                <button type="submit" className="bg-teal-500 text-white btn btn-block">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
        )}
                   
<Script id="nav-scripts" strategy="afterInteractive">
{`
  const navBtn = document.getElementById("header-btn");
  const headerMenu = document.getElementById("header-menu");

  if (navBtn && headerMenu) {
    // Toggle menu open / close
    navBtn.addEventListener("click", () => {
      navBtn.classList.toggle("active");
      headerMenu.classList.toggle("active");
    });

    // Close menu when any nav link is clicked
    const navLinks = headerMenu.querySelectorAll("a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navBtn.classList.remove("active");
        headerMenu.classList.remove("active");
      });
    });
  }
`}
</Script>

          </React.Fragment>
        )
    }
}
