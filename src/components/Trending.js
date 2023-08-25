import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import batman from "../assets/images/superhero/batman.jpg"
import cintabrontosaurus from "../assets/images/trending/cintabrontosaurus.jpg"
import doctorstrange2 from "../assets/images/trending/drstrange2.jpeg"
import elcamino from "../assets/images/trending/elcamino.jpeg"
import joker from "../assets/images/trending/joker.jpg"
import thegodfather from "../assets/images/trending/thegodfather.jpeg"

const Trending = () => {
    return(
        <div>
            <Container id="trending">
                <br/>
                <br/>
                <h1 className="text-white">Favorite Movie</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src= 
                        {batman}  
                        alt="duneImage"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The Dark Knight</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src=
                        {thegodfather}  
                        alt="everything" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The GodFather</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src=
                        {doctorstrange2}  
                        alt="infinite" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Dr Strange in the Multiverse</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src=
                        {elcamino}  
                        alt="infinite" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">El Camino</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src=
                        {joker}  
                        alt="infinite" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Joker</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src=
                        {cintabrontosaurus}  
                        alt="infinite" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Cinta Brontosaurus</Card.Title>
                                <Card.Text className="text-left">
Gatau Di Isi Apa
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
export default Trending