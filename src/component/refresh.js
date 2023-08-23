import React from 'react';
import refreshButton from './images/refreshButton.png'

function Refresh(props) {
  const reset = props.callBack
  
  return (
    <div className='refreshButtonPosition'>
      <img 
        src={refreshButton} 
        width = '75'
        height= '75'
        onClick = {reset}
        className='effect'
        alt = '' 
      />
    </div>
  );
}

export default Refresh;