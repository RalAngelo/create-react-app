import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import underline from './images/underline.png'
import AutomaticButton from './images/automaticButton.png'

function Header2(props){
    const click = props.callBack
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand> 
                        <span className = 'title_2'> RENIN' TSIKIDY </span> 
                        <img 
                            src={AutomaticButton} 
                            width='250' 
                            height='100' 
                            className='effect'
                            onClick={click}
                        />
                        <img
                            alt="" 
                            src = {underline}
                            width="310"
                            height="6" 
                            className="d-inline-block align position-absolute bottom-0 start-50 end-50 translate-middle-x"                     
                        /> 
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header2;