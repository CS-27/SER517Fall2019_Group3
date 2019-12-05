import React, { Component } from 'react';
import './beerStatus.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

/*Author: Salini Chittineni
Date added: Oct 16, 2019
Modified By: Salini Chittineni
Date modified : Oct 21,2019
*/
export default class beerStatus extends Component {
  constructor(props) {
    super(props);
    let date1 = new Date(); date1 = date1.setDate(date1.getDate()-1)
    let date2 = new Date(); date2 = date2.setDate(date2.getDate()-1)
    this.currentBeers = [
      {"recipeName": "WhiteDogIPA", "beerStatus": "2", "lastModified": date1},
      {"recipeName": "WinterWarmer-2", "beerStatus": "1", "lastModified": date2}
    ];

    this.beerStatuses_new = {
      "WhiteDogIPA": [
            {
              step:1,
              text:"Add yeast; ready for fermentation",
              percent: 25,
              status: 1,
              statusColor: "success",
              animated:"",
              label:"",
              hours:24
            },
            {
              step:2,
              text:"Fermentation Complete; Increase temperature to 62F",
              percent: 50,
              status: 2,
              statusColor: "warning",
              animated:"true",
              label:"50%",
              hours:336
            },
            {
              step:3,
              text:"Ready to Lager",
              percent: 25,
              status: 3,
              statusColor: "danger",
              animated:"",
              label:"",
              hours:72
            }

          ],
          "WinterWarmer-2": [
            {
              step:1,
              text:"Add yeast; ready for fermentation",
              percent: 25,
              status: 1,
              statusColor: "success",
              animated:"",
              label:"",
              hours:24
            },
            {
              step:2,
              text:"Fermentation Complete;Increase temperature to 62F",
              percent: 50,
              status: 2,
              statusColor: "warning",
              animated:"true",
              label:"50%",
              hours:336
            },
            {
              step:3,
              text:"Ready to Lager",
              percent: 25,
              status: 3,
              statusColor: "danger",
              animated:"",
              label:"",
              hours:72
            }

          ]
      }

      this.beerStatuses =  [
              {
                step:1,
                text:"Add yeast; ready for fermentation",
                percent: 25,
                status: 1,
                statusColor: "warning",
                animated:"true",
                label:"25%",
                hours:24
              },
              {
                step:2,
                text:"Fermentation Complete;Increase temperature to 62F",
                percent: 50,
                status: 2,
                statusColor: "danger",
                animated:"",
                label:"",
                hours:336
              },
              {
                step:3,
                text:"Ready to Lager",
                percent: 25,
                status: 3,
                statusColor: "danger",
                animated:"",
                label:"",
                hours:72
              }
  
            ]
        this.status = 1;

  }

  refresh=()=>{

    this.status += 1;
    let len = this.beerStatuses.length
    if(this.status > len){
      alert(this.beerStatuses[len-1].text)
    }
    for(let i=0; i<len; i++){
      let e = this.beerStatuses[i]
      if(e.status < this.status){
        e.animated = ""
        e.label = ""
        e.statusColor = "success"
      }else if (e.status == this.status){
        e.animated = "true"
        e.label = e.percent+"%"
        e.statusColor = "warning"
        alert(this.beerStatuses[i-1].text)
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


