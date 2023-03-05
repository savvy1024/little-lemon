import Button from "../ui/Button";
import Container from "./Container";
import GreekSalad from '../../assets/greek-salad.jpg'
import Bruschetta from '../../assets/bruschetta.jpg'
import SpecialsCard from "../cards/SpecialsCard";


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
