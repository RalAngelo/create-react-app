import React, { useEffect, useState } from "react";

function FourComponentC2(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png')

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const ombiasa1 = props.ombiasa1;
    const ombiasa2 = props.ombiasa2;
    const ombiasa3 = props.ombiasa3;
    const ombiasa4 = props.ombiasa4;

    const active = props.isClickedforOverSees;

    const ombiasaEffect1 = props.ombiasaEffect1;
    const ombiasaEffect2 = props.ombiasaEffect2;
    const ombiasaEffect3 = props.ombiasaEffect3;
    const ombiasaEffect4 = props.ombiasaEffect4;

    useEffect(() => {
        if(ombiasaEffect1 === 1){
            setImgSrc(circle1);
        }if(ombiasaEffect1 === 2){
            setImgSrc(circle2);
        }if(ombiasaEffect1 === 9){
            setImgSrc(circleTokana1);
        }if(ombiasaEffect1 === 10){
            setImgSrc(circleTokana2);
        }if(ombiasaEffect1 === 0){
            setImgSrc(circleEmpty)
        }if(ombiasaEffect2 === 1){
            setImgSrc2(circle1);
        }if(ombiasaEffect2 === 2){
            setImgSrc2(circle2);
        }if(ombiasaEffect2 === 9){
            setImgSrc2(circleTokana1);
        }if(ombiasaEffect2 === 10){
            setImgSrc2(circleTokana2);
        }if(ombiasaEffect2 === 0){
            setImgSrc2(circleEmpty);
        }if(ombiasaEffect3 === 1){
            setImgSrc3(circle1);
        }if(ombiasaEffect3 === 2){
            setImgSrc3(circle2);
        }if(ombiasaEffect3 === 9){
            setImgSrc3(circleTokana1);
        }if(ombiasaEffect3 === 10){
            setImgSrc3(circleTokana2);
        }if(ombiasaEffect3 === 0){
            setImgSrc3(circleEmpty);
        }if(ombiasaEffect4 === 1){
            setImgSrc4(circle1);
        }if(ombiasaEffect4 === 2){
            setImgSrc4(circle2);
        }if(ombiasaEffect4 === 9){
            setImgSrc4(circleTokana1);
        }if(ombiasaEffect4 === 10){
            setImgSrc4(circle2);
        }if(ombiasaEffect4 === 0){
            setImgSrc4(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(ombiasa1 === 1){
            setImgSrc(circle1);
        }if(ombiasa1 === 2){
            setImgSrc(circle2);
        }if(ombiasa1 === 9){
            setImgSrc(circleTokana1);
        }if(ombiasa1 === 10){
            setImgSrc(circleTokana2);
        }if(ombiasa1 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(ombiasa2 === 1){
            setImgSrc2(circle1);
        }if(ombiasa2 === 2){
            setImgSrc2(circle2);
        }if(ombiasa2 === 9){
            setImgSrc2(circleTokana1);
        }if(ombiasa2 === 10){
            setImgSrc2(circleTokana2);
        }if(ombiasa2 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(ombiasa3 === 1){
            setImgSrc3(circle1);
        }if(ombiasa3 === 2){
            setImgSrc3(circle2);
        }if(ombiasa3 === 9){
            setImgSrc3(circleTokana1);
        }if(ombiasa3 === 10){
            setImgSrc3(circleTokana2);
        }if(ombiasa3 === 0){
            setImgSrc3(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(ombiasa4 === 1){
            setImgSrc4(circle1);
        }if(ombiasa4 === 2){
            setImgSrc4(circle2);
        }if(ombiasa4 === 9){
            setImgSrc4(circleTokana1);
        }if(ombiasa4 === 10){
            setImgSrc4(circleTokana2);
        }if(ombiasa4 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])

    return(
        <div className='THMDisplayC'>
            <div className='imgPosition'>
                <img
                    alt=''
                    src={imgSrc}
                    width='50'
                    height='50'
                    className=''
                />
            </div>
            <div className='imgPosition'>
                <img
                    alt=''
                    src={imgSrc2}
                    width='50'
                    height='50'
                    className=''
                />
            </div>
            <div className='imgPosition'>
                <img
                    alt=''
                    src={imgSrc3}
                    width='50'
                    height='50'
                    className=''
                />
            </div>
            <div className='imgPosition'>
                <img
                    alt=''
                    src={imgSrc4}
                    width='50'
                    height='50'
                    className=''
                />
            </div>
        </div>
    )
}

export default FourComponentC2