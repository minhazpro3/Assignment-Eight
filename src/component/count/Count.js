import React from 'react';
import './count.css'
import Team from '../team/Team';

const Count = (props) => {
    const {Number}=props;
    
    const countHandeler =(preV , carrV)=> preV + carrV.salary;
   const CountReduce = Number.reduce(countHandeler,0)

    
    return (
        <div className="Count">
           <h4>Total persons: {Number.length} </h4>
           <h5>Total Amount: $ {CountReduce} </h5>
           <p>Names: </p>
           <div className="">
               {
                   Number.map(names=><Team key={names.key} names={names}></Team>)
               }
           </div>
        </div> 
    );
};

export default Count;