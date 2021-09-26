import React from 'react';
import './Team.css'

const Team = (props) => {
    // console.log(props.names);
   
    const {name,img}=props.names;
    
    return (
        <div className="data-img">
            <img src={img}/>
            <p>{name}</p>
        </div>
    );
};

export default Team;