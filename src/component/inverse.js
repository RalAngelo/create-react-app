import React from 'react';
import InverseButton from './images/ahodina_button.png';

function Inverse(props){
    const callBack = props.callBack;    
    return(
        <div>
            <img 
                src={InverseButton}
                width = '250'
                height= '100'
                className='effect'
                onClick={callBack} 
            />            
        </div>
    );
}

export default Inverse;