import imageU from "./../src/photos/Logo.svg";

const Nav = () => {
  return (
    <>
      <img src={imageU} alt='little lemon logo' width='200' />
      <nav>
        <ul>
          <li>
            <a href='#Home' alt='home'>
              Home
            </a>
          </li>
          <li>
            <a href='#About' alt='about'>
              About
            </a>
          </li>
          <li>
            <a href='#Menu' alt='menu'>
              Menu
            </a>
          </li>
          <li>
            <a href='#Reservations' alt='reservations'>
              Reservations
            </a>
          </li>
          <li>
            <a href='#Order Online' alt='order online'>
              Order Online
            </a>
          </li>
          <li>
            <a href='#login' alt='login'>
              login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
