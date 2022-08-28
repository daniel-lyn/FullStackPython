import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import { ReactComponent as Logo} from '../Images/logo.svg'

const navbarStyles = {
    backgroundColor: 'white'
};

const Header = (props) => {
    const { title} = props;
    return (
    <Navbar style={navbarStyles} variant="light">
        <Container>
            <Logo alt = {title} style = {{maxWidth: '13rem', maxHeight: '4rem'}}/>
        </Container>
    </Navbar>
    )
};

export default Header;