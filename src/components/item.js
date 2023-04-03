import "./item.css"
import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import {Card} from "./card.js"

export const Item = () => {
    const[user, setUsers] = useState({});


    let {id} = useParams();

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>
        setUsers(res.data)
        )
    }, [id])

  return (
    <div className='item-container'>
        <Card data={user}/>
        </div>
  )
}

