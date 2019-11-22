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
        text:"Add yeast; ready for fermentation",
        percent: 25,
        status: 0,
        statusColor: "success",
        animated:"",
        label:"",
        hours:24

      },
      {
        step:2,
        text:"Fermentation Complete;Increase temperature to 62F",
        percent: 50,
        status: 1,
        statusColor: "warning",
        animated:"true",
        label:"50%",
        hours:336

        

      },
      {
        step:3,
        text:"Ready to Lager",
        percent: 25,
        status: 2,
        statusColor: "danger",
        animated:"",
        label:"",
        hours:72

      }

    ]
  }
  refresh=()=>{
   
    let hoursPassed = 75; //lastupdate - getdate()
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
            Brewing Status for 
            </Card.Text>
            {/* <ProgressBar animated now={65} label={`65%`}/> */}
            <br/>
           <button onClick={this.refresh}>Update</button>
            <ProgressBar>
            {items2}
           
            </ProgressBar>
            <br/>
            </Card.Body>
            </Card>

            </Container>
    </div>
    
  );
}
}


