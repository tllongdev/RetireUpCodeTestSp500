import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar bg='primary' expand='md' variant='dark' style={{ background: 'linear-gradient(#ffffff15, #ffffff25)' }}>
			<Navbar.Brand className='font-italic' style={{ fontWeight: 300, fontSize: 17.75 }}>
				Slickcharts
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
		</Navbar>
	);
}
