import React, { useState } from 'react';
import { questions } from './api';
import  "./accordion.css" ;
import MyAccordion from './MyAccordion';

const Accordion = () => {
  const [data] = useState(questions);
    return(
        <div className='box'>
        <section className="main-div">
         <h4>Frequently Asked Questions</h4>
         <h5>In case you have more questions, feel free to reach out to us.</h5>
        { 
        data.map((curElem)=>{
          return <MyAccordion key={curElem.id}{...curElem}/>;
        })

        } 
         </section>
        </div>
    )
}
export default Accordion ;
