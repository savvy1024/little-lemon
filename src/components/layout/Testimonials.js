import CustomerOne from '../../assets/customer1.png';
import CustomerTwo from '../../assets/customer2.png';
import CustomerThree from '../../assets/customer3.png';
import TestimonialsCard from '../cards/TestimonialsCard';
import Container from './Container';
import FullBleedBackground from './FullBleedBackground';

const Testimonials=()=>{

    const testimonial=[
        {
          name: 'Jane Doe',
          image: CustomerOne,
          rating: '⭐⭐⭐⭐⭐',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
          link: '#',
        },
        {
          name: 'John Doe',
          image: CustomerTwo,
          rating: '⭐⭐⭐⭐',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
          link: '#',
        },
        {
          name: 'Janet Doe',
          image: CustomerThree,
          rating: '⭐⭐⭐⭐⭐',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
          link: '#',
        },
        {
          name: 'Jonathan Doe',
          image: CustomerTwo,
          rating: '⭐⭐⭐⭐⭐',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
          link: '#',
        },
      ];



    return(
        <section id="testimonials">
            <FullBleedBackground background='var(--secondary-color)'>
                <Container >
                    <h2 className='subtitle' style={{marginTop:'40px', textAlign:'center'}}>
                        Testimonials
                    </h2>
                    <div className='testimonial-list'>
                        {testimonial.map((testimonial, idx)=>(
                            <TestimonialsCard testimonial={testimonial} key={idx}/>
                        ))}
                    </div>
                </Container>

            </FullBleedBackground>
        </section>

    )

}

export default Testimonials;

