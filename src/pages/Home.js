import CallToAction from "../components/layout/CallToAction"
import HeroImage from '../assets/hero-image-sm.jpg'
import Special from "../components/layout/Special";
import Testimonials from "../components/layout/Testimonials";
import Profiles from "../components/layout/Profiles";

const Home =()=>{
    return(
        <>
        <CallToAction 
        primaryText='Little Lemon' 
        secondaryText='Chicago'
        description='We are a family owned Mediterranean restaurant, focused on traditional recipes servedwith a modern  twist.' 
        cta={true}
        ctaText="Reserve a Table"
        ctaURL='/booking'
        image={HeroImage}

        />
        <Special />
        <Testimonials />
        <Profiles />
       

        


      
        </>
    )
}

export default Home;
