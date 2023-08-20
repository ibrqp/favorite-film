import { Col, Container, Row, Button } from "react-bootstrap"
const Intro = () =>{
    return(
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center ">
          <Row>
            <Col>
            <div className="title">FILM & SERIES</div>
            <div className="title">FAVORIT</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">LIhat Semua List</Button>
            </div>
            
            </Col>
          </Row>
          </Container>
        </div>
    )
}

export default Intro