import React from "react";

export default class Event extends React.Component {

    render() {
        return (
          <React.Fragment>
          
<div className="u-text-center" id="event" style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
   
   <div className="event-content" id="event-info">
    
    <div className="text-center mb-1 pb-6">
        <h5>Private Chef Catered Events</h5>
    </div>

    <div className="row">
        <div className="md:col-4">
           <p>
            Our private chef services bring refined, restaurant-quality dining experiences directly to your event, transforming any space into an unforgettable culinary setting. Every menu is thoughtfully curated using fresh, seasonal ingredients sourced for peak flavor and presentation, ensuring a perfect balance between creativity and comfort. From intimate in-home dinners to upscale celebrations and milestone gatherings, our culinary team designs each dish to reflect your vision and your guests’ tastes. We handle every detail from menu planning and ingredient preparation to cooking, plating, and cleanup, allowing you to fully relax and enjoy the moment. Our chefs excel at crafting immersive dining experiences that pair exquisite cuisine with polished, professional service. With meticulous attention to detail, we elevate your catered event into a seamless, stress-free experience. Every meal is designed to engage the senses and create lasting impressions long after the final course is served. 
           </p>
        </div>
        <div className="md:col-4">
            <div className="col-xs-12 u-center">
            <img className="img-contain u-round-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSAUFpJaSF18nBsmwtyR2_M0t4kZ4sRxSMA&usqp=CAU" />
        </div>
        </div>
        <div className="md:col-4">
           <p>
            Whether you are hosting a corporate function, wedding reception, private celebration, or exclusive social gathering, our chefs craft fully bespoke menus that align seamlessly with the tone, theme, and atmosphere of your event. Each dish is prepared with precision and plated with care, ensuring that presentation enhances the overall dining experience just as much as flavor. Our team works closely with event planners, coordinators, and hosts to guarantee flawless timing, smooth service flow, and exceptional execution from start to finish. We specialize in personalized menu design, thoughtfully accommodating dietary restrictions, allergies, cultural traditions, and individual preferences without sacrificing quality or creativity. The result is a curated culinary journey that feels intentional, elevated, and inclusive for every guest. From elegant hors d’oeuvres to refined multi-course dinners, every item reflects our commitment to craftsmanship, freshness, and culinary artistry.   
           </p>
        </div>
    </div> 

   </div>
  </div>
          </React.Fragment>
        )
    }
}
