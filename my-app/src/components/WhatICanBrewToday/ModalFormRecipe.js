
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody,Table } from 'reactstrap'
import Card from 'react-bootstrap/Card';
import './ModalFormRecipe.css'
class ModalFormRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
      const userID = this.props.userID
      const label = this.props.buttonLabel
      const result = Object.values(this.props.item.Hops);
      var arrHops = [];
      
for (var key in this.props.item.Hops) {
  var arrKeys = this.props.item.Hops[key].trim().split(" ");
    arrHops.push(arrKeys)
}

var arrGrains = [];
      
for (var key in this.props.item.Grains) {
  var arrKeys = this.props.item.Grains[key].trim().split(" ");
  arrGrains.push(arrKeys)
}

      const listHops =  arrHops.map((link) =>{
      if(link.length>2)
      return <li >{link[0]} {link[1]}  {link[2]}</li> 
      else
      return <li >{link[0]}  {link[1]}</li> 
      }
  );
  const listGrains =  arrGrains.map((link) =>
  <li >{link[0]} - {link[1]}</li> 
);
      let button = ''
      let title = ''
      if(label === 'View'){
        button = <Button
                  id ="btn-color"
                  onClick={this.toggle}
                  >{label}
                </Button>
        title = 'View'
      } 


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>            <Card  className="mainCardOneRecipe">
         <Card.Body className = "card-body-recipe">
         <Card.Title className="titleCard" >{this.props.item.name}</Card.Title>
         <Table responsive hover>
  
  <tbody>
    <tr>
        <td>Directions</td>
      <td>
       { this.props.item.Directions}
      </td>
    </tr>
    <tr>
        <td>Malt</td>
      <td>
       { this.props.item.Malt}
      </td>
    </tr>
    {/* <tr>
        <td>Grains</td>
      <td>
        <ul>
            {listGrains}
        </ul>
      </td>
    </tr> */}
    <tr>
        <td>Hops</td>
      <td>
          <ul>
            {listHops}
          </ul>
       
      </td>
    </tr>
    <tr>
        <td>HopsSchedule</td>
      <td>
       { this.props.item.HopsSchedule}
      </td>
    </tr>
  </tbody>
</Table>
      
         </Card.Body>
       </Card>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormRecipe
