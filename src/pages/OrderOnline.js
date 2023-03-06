import CallToAction from "../components/layout/CallToAction";
import Dishes from "../components/layout/Dishes";
import HeroImage from "../assets/mediterranean-cuisine-g01db17309_1280.jpg";

const OrderOnline = () => {
  return (
    <>
      <CallToAction
        primaryText='Order Online'
        secondaryText='Browse through our menu'
        description=''
        image={HeroImage}
      />
      <Dishes />
    </>
  );
};

export default OrderOnline;
