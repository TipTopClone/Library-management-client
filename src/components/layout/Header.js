import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export const Header = () => {
  return (
    <Navbar expand='md' variant='dark' className='bg-dark'>
      <Container>
        <Link className='navbar-brand' to='/'>
          CL
        </Link>{' '}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-link' to='/'>
              <FaHome /> Home
            </Link>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
            <Link className='nav-link' to='/signup'>
              SignUp
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
