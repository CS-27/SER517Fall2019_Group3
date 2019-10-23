import React from 'react';
import './beerStatus.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

/*Author: Salini Chittineni
Date added: Oct 16, 2019
Modified By: Salini Chittineni
Date modified : Oct 21,2019
*/
function beerStatus() {
  return (

    <div>

      <div className="status">
        Brewing Status
      </div>
     <Container>
     <Card  className="mainCardOne">
  <Card.Body className ="bodyCardOne">

    <Card.Text className = "titleCardOne">
      Breweing Status for Pale Lager
    </Card.Text>
    {/* <ProgressBar animated now={65} label={`65%`}/> */}
    <br/>
    <ProgressBar>
        <ProgressBar variant="success"   now={25} key={1} />
        <ProgressBar variant="success" now={25} key={2} />
        <ProgressBar variant="warning" animated striped  now={25} key={3} />
        <ProgressBar  now={0} key={3} />
    </ProgressBar>
    <br/>
    <p>Day-4: Fermentation</p>
  </Card.Body>
</Card>
     </Container>

    </div>
    
  );
}

export default beerStatus;
