import React from 'react'
import './Stat.css'
const Stat = () => {
    const stat=[
        {
        number: "200+",
        text: "International Brands"
        },
        {
      number: "2,000+",
      text: "High-Quality Products"
    },{
      number: "30,000+",
      text: "Happy Customers"
    }
    ];
  return (
    <div className='stats'>
      {
        stat.map((item,index)=>(
            <div className='stat_item' key={index}>
                <h2>{item.number}</h2>
                <p>{item.text}</p>
            </div>
        ))
      }
    </div>
  );
};

export default Stat
