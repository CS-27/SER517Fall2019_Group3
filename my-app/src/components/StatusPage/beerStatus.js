import React, { Component } from 'react';
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
export default class beerStatus extends Component {
  constructor(props) {
    super(props);
    
    this.beerStatuses = [

      {
        step:1,
        text:"first step",
        percent: 25,
        status: 2,
        statusColor: "success",
        animated:"",
        label:"",
        hours:24

      },
      {
        step:2,
        text:"second step",
        percent: 50,
        status: 1,
        statusColor: "warning",
        animated:"true",
        label:"50%",
        hours:72
        

      },
      {
        step:3,
        text:"third step",
        percent: 25,
        status: 0,
        statusColor: "danger",
        animated:"",
        label:"",
        hours:144

      }

    ]
  }
  refresh=()=>{
   // alert("j")
    let hoursPassed = 75;
    let inprogressSet = false;
    for(let i=0; i<this.beerStatuses.length; i++){
      let e = this.beerStatuses[i]
      if(e.hours <= hoursPassed){
        e.animated = ""
        e.label = ""
        e.statusColor = "success"
      } 

      else if(e.hours >= hoursPassed && !inprogressSet){
        e.animated = "true"
        e.label = e.percent+"%"
        e.statusColor = "warning"
        inprogressSet = true

        alert(e.text)

      }else{
        e.animated = ""
        e.label = ""
        e.statusColor = "danger"
      }

    }
    this.setState({
      beerStatuses:this.beerStatuses
    })
    
  }


  render() {

    const items2 = this.beerStatuses.map(item => {
      return (
        
        <ProgressBar animated={item.animated} variant={item.statusColor} now={item.percent} key={item.key} label={item.label} />

        )
      })

    return (

    <div>

      <div className="status">

      </div>
     <Container>
     <Card  className="mainCardOne">
            <Card.Body className ="bodyCardOne">

            <Card.Text className = "titleCardOne">
            Brewing Status
            </Card.Text>
            {/* <ProgressBar animated now={65} label={`65%`}/> */}
            <br/>
           <button onClick={this.refresh}>Refresh</button>
            <ProgressBar>
            {items2}
            {/* <ProgressBar variant="success"   now={25} key={1} />
            <ProgressBar variant="success" now={25} key={2} />
            <ProgressBar variant="warning" animated striped  now={25} key={3} />
            <ProgressBar  now={0} key={3} /> */}
            </ProgressBar>
            <br/>
            <p>Cool Wort and add hops</p>
            </Card.Body>
            </Card>

            </Container>
    </div>
    
  );
}
}


