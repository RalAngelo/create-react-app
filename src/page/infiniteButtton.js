import React from 'react';
import KajyButton from './images/Kajy.png';

function InfiniteBoutton(props){
    const click = props.callBack;
    return(
        <div>
            <img 
                src={KajyButton}
                width = '250'
                height= '100'
                className='effect'
                onClick={click} 
            />            
        </div>
    );
}

export default InfiniteBoutton;