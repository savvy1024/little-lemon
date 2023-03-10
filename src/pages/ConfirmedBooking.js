import CallToAction from "../components/layout/CallToAction"
import HeroImage from '../assets/chef-5993951_1280.jpg';
import Container from "../components/layout/Container";
import SuccessIcon from '../assets/mdi_success-circle.png';
import Button from "../components/ui/Button";


const ConfirmedBooking = () =>{
    return(
        <>
        <CallToAction primaryText="Your Reservation" secondaryText="Hope to see you soon!" description="" image={HeroImage}>

        </CallToAction>
        <section>
            <Container customize={true} customStyles={{textAlign:'center', marginBottom:'80px'}}>
            <div>
                <img src={SuccessIcon} alt="" />
                <p className="lead-test" style={{margin:'20px 0 30px'}}>
                    Reservation Successful
                </p>
                <Button btnText="Visit Home" path='/'></Button>

            </div>

            </Container>
        </section>
        </>
    )
}

export default ConfirmedBooking;