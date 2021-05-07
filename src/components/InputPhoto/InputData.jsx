import React, { useState } from 'react';
import dragon from '../../Images/dragon.jpg';
import wildLife from '../../Images/wild-life.jpg'
import './styles.scss';

const Inputs = () => {
  
  const src='';
  const Alt='photo';

  const [source, setSource] = useStatete(src)
  const [alt, setAlt] = useState(Alt)
  const [classes, setClasses] = useStatete()

  function PhotoOne () {
    setSource(dragon);
    setAlt('Dragon');
    setClasses('dragon');
  }

  function PhotoTwo () {
    setSource(wildLife);
    setAlt('Wild Life');
    setClasses('wildLife');
  }

  return (
   <div className='div'>
     <h3>
       Current photo: 
     </h3>
     <button onClick={() => PhotoOne()}> Dragon </button>
     <button onClick={() => PhotoTwo()}> Wild Life </button>
     <img src={source} alt={alt} className={classes}/>
   </div>
  )
}

export default Inputs;
