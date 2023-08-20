import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import breakingbad from "../assets/images/trending/brakingbad.png"
import thebabysitters from "../assets/images/superhero/thebabysitters.jpeg"
import onepiece from "../assets/images/superhero/onepiece.jpeg"
import naruto from "../assets/images/superhero/naruto poster.jpeg"
import belomnemu from "../assets/images/superhero/Rekomendasi.png"
import superman from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return(
        <div >
            <Container id="superhero">
                <br/>
                <br/>
                <h1 className="text-white" > Favorite Series / Anime</h1>
                <Row>
                    <Col md={4} className="movieWrapper" > 
                        <Card className="movieImage">
                        <Image src= 
                        {breakingbad}  
                        alt="breakingbad"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Breakin gBad</Card.Title>
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
                        {thebabysitters}  
                        alt="everything" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The Baby Sitters I</Card.Title>
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
                        {onepiece}  
                        alt="batman" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">One Piece</Card.Title>
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
                        {naruto}  
                        alt="robinhood" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Naruto Shippuden</Card.Title>
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
                        {belomnemu}  
                        alt="spidermen" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Cooming Soon</Card.Title>
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
                        {belomnemu}  
                        alt="superman" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Cooming Soon</Card.Title>
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
export default Superhero