/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React from "react"
const RecipeDetails = (props) => {
  return (
    props.object1.map((key, idx)=> {
      let id1 = `cat-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={id1}>{`Ingredient1${idx + 1}`}</label>
          <input
            type="text"
            name={id1}
            value-id={idx}
            id={id1}
            value={props.object1[idx].name} 
            className="name"
          />
        </div>
      )
    })
  )
}
export default RecipeDetails
