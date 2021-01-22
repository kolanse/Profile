import React from "react";
import "./card.styles.css";

const Card =({person}) => {
    return(
        <div className="card-container">
            <img
   alt="Human Image"
   src={`https://source.unsplash.com/200x200/?${person.Gender},face`}
  />
  <h2>{person.FirstName}  {person.LastName}</h2>
   <p>{person.Gender}</p>

        </div>
    )
}
export default Card;