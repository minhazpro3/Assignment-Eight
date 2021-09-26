import React, { useState, useEffect } from 'react';
import Employee from '../../employee/Employee';
import './Section.css'
import Count from '../count/Count';

const Section = () => {

    


    const [Number, setNumber]=useState([])

    const ClickHandel = (person) => {
       
        const newPerson = [...Number,person]
        setNumber(newPerson);
        
        
    }
        
    // every person data
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
        
    },[])

    return (
        <div className="container mt-4">
            <div className="section-div">
                <div className="cart">
                
                   {
                       info.map(information=><Employee ClickHandel={ClickHandel} key={information.key} information={information}></Employee>)
                   }
                  
                </div>
                <div>
                    <Count  Number={Number}> </Count>
                </div>

            </div>.
           <p className="p-1"> All right resurved by minhaz@com.</p>
        </div>
    );
};

export default Section;