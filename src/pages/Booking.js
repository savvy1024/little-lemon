import React from 'react';
import { useFormik } from 'formik';
import Container from '../components/layout/Container';

const SignupForm = () => {
  
    const bookingStyle={
        display: 'grid',
         maxWidth: '200px',
         gap: '20px'
    }
  return (
   <>
    <Container><form style={bookingStyle}>
    <label for="res-date">Choose date</label>
   <input type="date" id="res-date" />
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" />
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form>
</Container>
   </>
  );
};

export default SignupForm ;