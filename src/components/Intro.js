import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
            <div className="introButton mt-4 text-center">
              <Button href="https://opaku1.000webhostapp.com/" variant="dark">OPAKU</Button>
            </div>
            <div className="introButton mt-4 text-center">
              <Button href="http://127.0.0.1:8000/all" variant="dark">GCI</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
