import React, { useEffect, useState } from "react";

function FourComponentC7(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png')

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const safary1 = props.safary1;
    const safary2 = props.safary2;
    const safary3 = props.safary3;
    const safary4 = props.safary4;

    const active = props.isClickedforOverSees

    const safaryEffect1 = props.safaryEffect1;
    const safaryEffect2 = props.safaryEffect2;
    const safaryEffect3 = props.safaryEffect3;
    const safaryEffect4 = props.safaryEffect4;

    useEffect(() => {
        if(safaryEffect1 === 1){
            setImgSrc(circle1);
        }if(safaryEffect1 === 2){
            setImgSrc(circle2);
        }if(safaryEffect1 === 9){
            setImgSrc(circleTokana1);
        }if(safaryEffect1 === 10){
            setImgSrc(circleTokana2);
        }if(safaryEffect1 === 0){
            setImgSrc(circleEmpty)
        }if(safaryEffect2 === 1){
            setImgSrc2(circle1);
        }if(safaryEffect2 === 2){
            setImgSrc2(circle2);
        }if(safaryEffect2 === 9){
            setImgSrc2(circleTokana1);
        }if(safaryEffect2 === 10){
            setImgSrc2(circleTokana2);
        }if(safaryEffect2 === 0){
            setImgSrc2(circleEmpty);
        }if(safaryEffect3 === 1){
            setImgSrc3(circle1);
        }if(safaryEffect3 === 2){
            setImgSrc3(circle2);
        }if(safaryEffect3 === 9){
            setImgSrc3(circleTokana1);
        }if(safaryEffect3 === 10){
            setImgSrc3(circleTokana2);
        }if(safaryEffect3 === 0){
            setImgSrc3(circleEmpty);
        }if(safaryEffect4 === 1){
            setImgSrc4(circle1);
        }if(safaryEffect4 === 2){
            setImgSrc4(circle2);
        }if(safaryEffect4 === 9){
            setImgSrc4(circleTokana1);
        }if(safaryEffect4 === 10){
            setImgSrc4(circle2);
        }if(safaryEffect4 === 0){
            setImgSrc4(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(safary1 === 1){
            setImgSrc(circle1);
        }if(safary1 === 2){
            setImgSrc(circle2);
        }if(safary1 === 9){
            setImgSrc(circleTokana1);
        }if(safary1 === 10){
            setImgSrc(circleTokana2);
        }if(safary1 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(safary2 === 1){
            setImgSrc2(circle1);
        }if(safary2 === 2){
            setImgSrc2(circle2);
        }if(safary2 === 9){
            setImgSrc2(circleTokana1);
        }if(safary2 === 10){
            setImgSrc2(circleTokana2);
        }if(safary2 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(safary3 === 1){
            setImgSrc3(circle1);
        }if(safary3 === 2){
            setImgSrc3(circle2);
        }if(safary3 === 9){
            setImgSrc3(circleTokana1);
        }if(safary3 === 10){
            setImgSrc3(circleTokana2);
        }if(safary3 === 0){
            setImgSrc3(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(safary4 === 1){
            setImgSrc4(circle1);
        }if(safary4 === 2){
            setImgSrc4(circle2);
        }if(safary4 === 9){
            setImgSrc4(circleTokana1);
        }if(safary4 === 10){
            setImgSrc4(circleTokana2);
        }if(safary4 === 0){
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

export default FourComponentC7