import React from "react"; 
import Image from "next/image";

export default class Splash extends React.Component {  

    render() {
        return (   
          <React.Fragment> 

 <div className="splash bg-gray-800 u-opacity-80 u-center" id="home"> 
 
 <div className="container">
		<input type="radio" name="r" id='r1' defaultChecked></input>
		<input type="radio" name="r" id='r2'></input>
		<input type="radio" name="r" id='r3'></input>
		<input type="radio" name="r" id='r4'></input>

		<div className='Slider'>
			<div className='slide One'>
				<div className='Content'>
					<div>
					<h6>An Elevated Culinary Experience</h6>
					<p>
					 An elevated charcuterie and private chef experience designed for intimate gatherings and unforgettable moments. Thoughtfully sourced meats, artisan cheeses, and seasonal accompaniments are paired with custom menus crafted to your taste. From cozy dinners to stylish celebrations, every detail is handled with care, creativity, and calm professionalism. Expect refined flavors, warm hospitality, and a seamless service that transforms any space into a memorable table shared with ease.
					</p>
					</div>
				</div>
				<div className="ImageContent"> 
					<Image src="/images/slide_1.jpg" 
					alt=""
					width={300}
					height={300}
					priority
					/>
				</div>
			</div>
			<div className='slide Two'>
				<div className='Content'>
					<div>
					<h6>Thoughtfully Crafted Cuisine</h6>
					<p>
					 Zimmerle Eats offers customized menus crafted for your tastes, preferences, and dietary needs. From intimate dinners to special celebrations, each experience is thoughtfully planned and professionally executed. Ingredients are carefully selected, meals are prepared on-site, and every course is presented with intention. The service includes menu design, cooking, plating, and cleanup, allowing you to relax and enjoy the moment. Each event is handled with precision, creativity, and quiet attention to detail throughout.
					</p>
					</div>
				</div>
				<div className="ImageContent">
				    <Image src="/images/slide_2.jpg" 
					alt=""
					width={300}
					height={300}
					priority
					/>
				</div>
			</div>
			<div className='slide Three'>
				<div className='Content'>
					<div>
					<h6>Artful Progression of Tastes</h6>
					<p>
					 Each course is thoughtfully designed to guide diners through a seamless culinary journey, beginning with delicate appetizers that awaken the palate and progressing to carefully balanced main dishes showcasing seasonal ingredients. Desserts and accompaniments are selected to complement flavors while providing visual elegance. From plating to timing, every element is orchestrated with precision and care. Attention to detail ensures that each moment at the table is both refined and memorable, creating a dining rhythm that delights the senses from start to finish.
					</p>
					</div>
				</div>
				<div className="ImageContent">
					<Image src="/images/slide_3.jpg" 
					alt=""
					width={300}
					height={300}
					priority
					/>
				</div>
			</div>
			<div className='slide Foor'>
				<div className='Content'>
					<div>
					<h6>Crafting Your Perfect Evening</h6>
					<p>
					 Creating your own private chef event begins with selecting a menu that reflects your tastes and the occasion. Each detail is planned in advance, from sourcing the finest ingredients to designing courses that flow effortlessly. The chef coordinates timing, preparation, and presentation to ensure a seamless evening. Guests are guided through each dish with care and attention, while service is handled unobtrusively. Every element is tailored for comfort, elegance, and enjoyment, transforming your space into a refined dining destination from start to finish.	
					</p>
					</div>
				</div>
				<div className="ImageContent">
					<Image src="/images/slide_4.jpg" 
					alt=""
					width={300}
					height={300}
					priority
					/>
				</div>
			</div>
		</div>
		<div className="Navigation">
			<label htmlFor='r1'><span></span></label>
			<label htmlFor='r2'><span></span></label>
			<label htmlFor='r3'><span></span></label>
			<label htmlFor='r4'><span></span></label>
		</div>
	</div>
 
 </div>
                   
          </React.Fragment>
        )
            } 
}
