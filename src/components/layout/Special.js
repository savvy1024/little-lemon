import Button from "../ui/Button";
import Container from "./Container";
import GreekSalad from '../../assets/greek-salad.jpg'
import Bruschetta from '../../assets/bruschetta.jpg'
import SpecialsCard from "../cards/SpecialsCard";
import LemonDessert from '../../assets/lemon-dessert.jpg'
import Pasta from '../../assets/pasta.jpg';
import GrilledFish from '../../assets/grilled-fiish.jpg';
import Burger from '../../assets/burger.jpg';



const Special=({header = true})=>{
    const menulist =[
        {name: 'Greek Salad',
        image: GreekSalad,
        price: 12.99,
        description:
          'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        link: '#',},
        {
            name: 'Bruschetta',
            image: Bruschetta,
            price: 5.99,
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            link: '#',
          },

          {
            name:'Lemon Dessert',
            image:LemonDessert,
            price:'5.99',
            description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            link:'#',
    
          },
          {
            name: 'Pasta',
            image: Pasta,
            price: 18.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
            link: '#',
          },
          {
            name: 'Grilled Fish',
            image: GrilledFish,
            price: 6.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
            link: '#',
          },
      
          {
            name: 'Burger',
            image: Burger,
            price: 8.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
            link: '#',
          },
    ]

    const hearderStyle={
        display: 'flex',
        alignItems:'center',
        justifyContent:"space-between",
        marginBottom:'40px',
        gap:'20px',

    };

    return(
        <section id="menu">
            <Container>
                {header && (
                    <div style={hearderStyle}>
                        <h2 className="subtitle">This Week Specials</h2>
                        <Button btnText='Online Menu' path='/order-online' />
                    </div>
                )}

                <ul className="specials-list">
                    {menulist.map((meal, idx)=>(
                       <SpecialsCard meal={meal} key={idx}/>

                    ))}
                </ul>

            </Container>
        </section>

    )
}

export default Special;
