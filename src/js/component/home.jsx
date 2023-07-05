import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div classNameName="text-center mx-auto w-100">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex mx-auto justify-content-center my-3">
				<Card img={"https://helios-i.mashable.com/imagery/articles/05Ym34W6tH3CyuWYOCbpCAr/hero-image.fill.size_1200x675.v1623391769.jpg"}/>
				<Card img={"https://helios-i.mashable.com/imagery/articles/05Ym34W6tH3CyuWYOCbpCAr/hero-image.fill.size_1200x675.v1623391769.jpg"}/>
				<Card img={"https://helios-i.mashable.com/imagery/articles/05Ym34W6tH3CyuWYOCbpCAr/hero-image.fill.size_1200x675.v1623391769.jpg"}/>
				<Card img={"https://helios-i.mashable.com/imagery/articles/05Ym34W6tH3CyuWYOCbpCAr/hero-image.fill.size_1200x675.v1623391769.jpg"}/>
				
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
