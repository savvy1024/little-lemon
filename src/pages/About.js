import CallToAction from "../components/layout/CallToAction"
import HeroImage from '../assets/restaurant-449952_1280.jpg';
import AboutUs from "../components/layout/Aboutus";

const About = ()=>{

    return(
        <>
        <CallToAction 
        primaryText='Welcome to Little Lemon'
        secondaryText='Find more about us here'
        image = {HeroImage}
        />
        <AboutUs />

        </>
    )
}

export default About;