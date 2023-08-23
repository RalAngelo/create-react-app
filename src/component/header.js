import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import imageHome from './images/home.png'
import imageSir from './images/sir.png'

function Header(props){
    return(
        <Navbar fixed='center'>
            <Container>
                <Navbar.Brand href="#home">
                    <div className="bg-image hover-zoom d-inline-block align position-absolute top-50 end-100 translate-middle-y">
                        <img
                            alt=""
                            src={imageHome}
                            width="80"
                            height="80"
                            className="img_1"
                        />
                    </div>
                    {' '}
                <span className='title'>SIKIDY RA-HANOKH'MBE</span> 
                {' '}
                <img
                    alt="" 
                    src = {imageSir}
                    width="60"
                    height="60" 
                    className="d-inline-block align position-absolute top-50 start-100 translate-middle-y"                     
                />

                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default Header;