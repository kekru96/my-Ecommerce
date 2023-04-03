import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Card} from "./card.js"
import "./cardList.css"

import {Link} from "react-router-dom"

export const CardList = () => {
    const[users, setUsers] = useState([]);

    useEffect(() =>{
        axios("https://jsonplaceholder.typicode.com/users").then((res)=>
        setUsers(res.data)
        )
    }, [])
    
  return (
    <div className='cardListContainer'>
      {users.map((user) =>{
        return(
          <div key={user.id} className='cardContainer'>
            <Link to={`/item/${user.id}`}>
            <Card  data={user}/>
            </Link>
          </div>
        );
      })}
      </div>
    
  )
}
