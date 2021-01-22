import React from "react";
import "./cardList.styles.css";
import Card  from "../Card/Card";


export const CardList = ({ persons }) => (
    <div className="cardList">
     {persons.map(person => (
      <Card key={Math.random()} person={person} />
     ))}
    </div>
   );