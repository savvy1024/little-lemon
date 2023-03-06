import CallToAction from "../components/layout/CallToAction";
import Dishes from "../components/layout/Dishes";
import HeroImage from "../assets/mediterranean-cuisine-g01db17309_1280.jpg";

const Menu = () => {
  return (
    <>
      <CallToAction
        primaryText='Here is our Menu'
        secondaryText=''
        description=''
        image={HeroImage}
      />
      <Dishes />
    </>
  );
};

export default Menu;
