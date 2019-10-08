/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/
import React from "react"
import {Container, FormLabel, FormControl, FormGroup } from "react-bootstrap"

const RecipeDetails = (props) => 
{
  return (
    props.object1.map((key, idx)=> {
      let id1 = `cat-${idx}`
      return (
        <div key={idx}>
        <FormGroup>
        
          <FormLabel htmlFor={id1}>{`Ingredient1${idx + 1}`}</FormLabel>
          <FormControl
              autoFocus
              type="text"
              className="name"
              name={id1}
              id={id1}
              value={props.object1[idx].name} 
            />
        
        </FormGroup>
        </div>
      )
    })
  )
}

export default RecipeDetails
