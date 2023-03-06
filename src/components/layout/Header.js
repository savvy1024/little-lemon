import { useState } from "react";
import Container from "./Container";
import logo from "../../assets/logo-small.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isNavExpand, setIsNavExpand] = useState(false);
  const closeNav = () => {
    if (isNavExpand) {
      setIsNavExpand(false);
    }
  };
  return (
    <header>
      <Container>
        <nav className='nav'>
          <Link to='/' className='header-logo'>
            <img src={logo} alt='Little Lemon' />
          </Link>
          <button
            className='hamburger'
            type='button'
            aria-label={`Click to ${
              isNavExpand ? "close" : "Open"
            } navigator menu`}
            onClick={() => {
              setIsNavExpand(!isNavExpand);
            }}
          >
            {isNavExpand ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <ul
            className={isNavExpand ? "nav-links expanded" : "nav-links"}
            aria-hidden={isNavExpand ? false : true}
          >
            <li>
              <Link to='/' className='nav-link card-title' onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='nav-link card-title'
                onClick={closeNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/menu'
                className='nav-link card-title'
                onClick={closeNav}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to='/booking'
                className='nav-link card-title'
                onClick={closeNav}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to='/order-online'
                className='nav-link card-title'
                onClick={closeNav}
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link card-title' onClick={closeNav}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
