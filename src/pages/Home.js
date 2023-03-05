import CallToAction from "../components/layout/CallToAction"
import HeroImage from '../assets/hero-image-sm.jpg'

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
        


      
        </>
    )
}

export default Home;
