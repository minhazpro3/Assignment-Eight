import React from 'react';
import './Employee.css'

const Employee = (props) => {
  // console.log(props.information)
   
 
    const {img,name,comphany,age,city,salary}=props.information;
    return (
        <div>
       
       <div className="card shadow-lg">
             <img src={img} className="card-img-top" alt="..."/>
           <div className="details">
           <h3 className="card-title">Name:{name} </h3>
             <h4>Job: {comphany}</h4>
             <h4>Age: {age}</h4>
             <h5>City: {city}</h5>
             <h6>Salary: ${salary}</h6>
           </div>
           <div>
    <button onClick={()=>props.ClickHandel(props.information)} className="button">{<i className="far fa-plus-square"></i>} Add to Team</button>
           </div>
           <div className='contact'>
          <a href="#"> <i className="fab fa-facebook"></i></a>
         <a href="#">  <i className="fab fa-twitter"></i></a>
           </div>
       </div>
        </div>
    );
};

export default Employee;