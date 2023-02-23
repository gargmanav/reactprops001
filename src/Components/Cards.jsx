import React from 'react'
import './Cards.css';



const Cards = (props) => {
    return (
        <div style={{ width: "200px", height: "250px",margin:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div style={{
                backgroundColor: props.color,
                width: "200px",
                height: "150px"
            }}></div>
            <h3>{props.code}</h3>
            <p style={{color:props.color}}>{props.name}</p>
        </div>
    )
}

export default Cards