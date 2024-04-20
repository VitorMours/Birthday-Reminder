import React from 'react';
import Card from './card.js';
function List( {people} ){
    const list = [];
    people.map((people) => {
      
      list.push(<Card props={people} />);
    
    })
    console.log(list)
    return( list );
  
  
  
}

export default List;