import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar bg='primary' expand='md' variant='dark'>
			<Navbar.Brand className='font-italic'>Slickcharts</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
		</Navbar>
	);
}
