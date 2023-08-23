import React from "react";
import HomeImg from './images/home.png'
import SirImg from './images/sir.png'
import Container from './images/manerakaTab.png'
import Planete from './images/planete.gif'
import Buttonkajy from './images/Kajy.png'
import { Link } from "react-router-dom";

function HomeImgButton(){
    return(
        <div>
            <img 
                src={HomeImg}
                width = '100'
                height= '100'
                className='homeImgPosition' 
            />
            <img 
                src={SirImg}
                width = '70'
                height= '70'
                className='sirImgPosition'
            />
            <img
                src={Container}
                width = '450'
                height= '670'
                className='containerPosition'
            />
            <img
                src={Planete}
                width = '95'
                height= '95'
                className='planetePosition'
            />
            <Link to='/TsyHitaMasoPage'>
                <img
                    src={Buttonkajy}
                    width = '200'
                    height= '90'
                    className='ButtonkajyPosition'
                />
            </Link>
        </div>
    )
}
export default HomeImgButton