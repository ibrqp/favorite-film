import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                <Navbar.Brand>6IX</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Movie</Nav.Link>
                        <Nav.Link href="#superhero">Series</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )

}

export default NavigationBar