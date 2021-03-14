import { Button, Card, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
export default function listo() {
  return (
    <div>
      <p>hola</p>
      <Container>
        <Button variant="success">Success</Button>
        <div className="">

        </div>
        <Card>
          <Card.Img variant="top" className="w-100" src="https://picsum.photos/seed/picsum/2000/1000" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
      
    </div>
  )
}

