/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/
import React from "react"
import {Container, Row, Col, FormLabel, FormControl, FormGroup } from "react-bootstrap"

const RecipeDetails = (props) => 
{
  return (
    props.object1.map((key, idx)=> {
      let id1 = `name-${idx}` , qtyid = `quantity-${idx}`  
      return (
        <div key={idx}>
          <Row>
            <Col>
        <FormGroup>
          <FormLabel htmlFor={id1}>
          Name
          </FormLabel>
          <FormControl
              autoFocus
              type="text"
              className="name"
              placeholder="e.g: Cascade, Simcoe etc."
              // onChange={this.handleChange}
            />
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <FormLabel htmlFor={qtyid}>
          Quantity
          </FormLabel>
          <FormControl
              autoFocus
              type="text"
              className="quantity"
              placeholder="in Ounces"
            />
        </FormGroup>
        </Col>
        </Row>
        </div>
      )
    })
  )
}

export default RecipeDetails