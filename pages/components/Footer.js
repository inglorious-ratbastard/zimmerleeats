import React from "react";
import Script from 'next/script'

export default class Footer extends React.Component {
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

    state = {
    modalOpen: false,
    modalType: null
    };

    openModal = (type) => {
    this.setState({ modalOpen: true, modalType: type });
    };

    closeModal = () => {
    this.setState({ modalOpen: false, modalType: null });
    };

    getModalContent() {
  const { modalType } = this.state;

    switch (modalType) {
    case "privacy":
        return {
        title: "Privacy Policy",
        body: "At Zimmerle Eats, we truly care about your privacy. We only collect what’s necessary to make your experience deliciously smooth, and rest assured, your personal info stays just between us. Take a moment to relax and know you’re in safe hands."
        };
    case "terms":
        return {
        title: "Terms of Use",
        body: "By exploring Zimmerle Eats, you agree to our little house rules. Nothing complicated—just guidelines to keep your journey tasty and fair. Sit back, enjoy, and know that we’re here to make every bite enjoyable."
        };
    case "policies":
        return {
        title: "Site Policies",
        body: "Our policies help keep things running smoothly—from reservations to cancellations and refunds. We’ve kept them simple and fair, so you can focus on savoring the experience rather than worrying. Take a breath and read at your own pace."
        };
    default:
        return {};
    }

}

  render() {
      return (
        <React.Fragment>
    
<footer className="footer u-opacity-90 bg-gray-700" id="footer">

     <div className="text-white pt-1" id="topper">
     <button className="btn-transparent text-white"><i className="fa fa-utensils fa-lg pt-3" id="foot_tog"></i></button> 
     </div>
    <h6 className="footer__title font-semibold uppercase text-yellow-300">Zimmerle Eats</h6>
  
  <div className="content"> 
    <div className="divider"></div> 
       <div className="row pt-1">
            <div className="col-4">
                <ul className="no-bullets">
                    <a onClick={this.scrollToSection("home")}>
                        <li className="footer__list-item">Home</li>
                    </a>
                    <a onClick={this.scrollToSection("about")}>
                        <li className="footer__list-item">About Chef</li>
                    </a>
                    <a onClick={this.scrollToSection("service")}>
                        <li className="footer__list-item">Services</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div>
            <div className="col-4">
                <ul className="no-bullets">
                    <a onClick={this.scrollToSection("gallery")}>
                        <li className="footer__list-item">Gallery</li>
                    </a>
                    <a onClick={this.scrollToSection("board")}>
                        <li className="footer__list-item">Tasting Board</li>
                    </a>
                    <a onClick={this.scrollToSection("event")}>
                        <li className="footer__list-item">Events</li>
                    </a>
                    <ul>
                    </ul>
                </ul>
            </div> 
            <div className="col-4">
                <ul className="no-bullets">
                    <li
                    className="footer__list-item cursor-pointer"
                    onClick={() => this.openModal("privacy")}
                    >
                    Privacy
                    </li>
                    <li
                    className="footer__list-item cursor-pointer"
                    onClick={() => this.openModal("terms")}
                    >
                    Terms Of Use
                    </li>
                    <li
                    className="footer__list-item cursor-pointer"
                    onClick={() => this.openModal("policies")}
                    >
                    Policies
                    </li>
                </ul>
            </div>

        </div>
           <div className="footnote pt-1">
      <p className="subtitle pt-1 text-yellow-300">Zimmerle Eats © 2024.</p> 
          </div>
    </div>
    
</footer>

{this.state.modalOpen && (
  <div className="modal modal--visible">
    <div className="modal__overlay" onClick={this.closeModal}></div>

    <div className="modal__content">
      <div className="modal__header">
        <h5 className="modal__title">
          {this.getModalContent().title}
        </h5> 
      </div>

      <div className="modal__body">
        <p>{this.getModalContent().body}</p>
      </div>

      <div className="modal__footer">
        <button className="btn btn--sm btn-dark" onClick={this.closeModal}>
          Close
        </button>
      </div>
    </div>
  </div>
)}

<Script id="foot-scripts"> 
{`

const footer = document.getElementById('footer');
var status = footer.className.includes('active'); 
document.getElementById("foot_tog").addEventListener("click", function() {
      if(status === "false"){
        footer.style.height = "38%";
        footer.scrollIntoView({ block: "end" });
        footer.classList.add("active");
        status = !!"false"; 
    } else if(status == "true"){ 
        footer.style.height = "5.5rem";
        status = !status;
      } 
}); 

`}
</Script>
          
          </React.Fragment>
       )
    }
}
