import React, { useEffect, useState } from "react";

function FourComponentC(props){
    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png');

    const fahasivy1 = props.fahasivy1;
    const fahasivy2 = props.fahasivy2;
    const fahasivy3 = props.fahasivy3;
    const fahasivy4 = props.fahasivy4;

    const fahasivyEffect1 = props.fahasivyEffect1;
    const fahasivyEffect2 = props.fahasivyEffect2;
    const fahasivyEffect3 = props.fahasivyEffect3;
    const fahasivyEffect4 = props.fahasivyEffect4;

    const active = props.isClickedforOverSees;

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    useEffect(() => {
        if(fahasivyEffect1 === 1){
            setImgSrc(circle1);
        }if(fahasivyEffect1 === 2){
            setImgSrc(circle2);
        }if(fahasivyEffect1 === 9){
            setImgSrc(circleTokana1);
        }if(fahasivyEffect1 === 10){
            setImgSrc(circleTokana2);
        }if(fahasivyEffect1 === 0){
            setImgSrc(circleEmpty)
        }if(fahasivyEffect2 === 1){
            setImgSrc2(circle1);
        }if(fahasivyEffect2 === 2){
            setImgSrc2(circle2);
        }if(fahasivyEffect2 === 9){
            setImgSrc2(circleTokana1);
        }if(fahasivyEffect2 === 10){
            setImgSrc2(circleTokana2);
        }if(fahasivyEffect2 === 0){
            setImgSrc2(circleEmpty);
        }if(fahasivyEffect3 === 1){
            setImgSrc3(circle1);
        }if(fahasivyEffect3 === 2){
            setImgSrc3(circle2);
        }if(fahasivyEffect3 === 9){
            setImgSrc3(circleTokana1);
        }if(fahasivyEffect3 === 10){
            setImgSrc3(circleTokana2);
        }if(fahasivyEffect3 === 0){
            setImgSrc3(circleEmpty);
        }if(fahasivyEffect4 === 1){
            setImgSrc4(circle1);
        }if(fahasivyEffect4 === 2){
            setImgSrc4(circle2);
        }if(fahasivyEffect4 === 9){
            setImgSrc4(circleTokana1);
        }if(fahasivyEffect4 === 10){
            setImgSrc4(circle2);
        }if(fahasivyEffect4 === 0){
            setImgSrc4(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(fahasivy1 === 1){
            setImgSrc(circle1);
        }if(fahasivy1 === 2){
            setImgSrc(circle2);
        }if(fahasivy1 === 9){
            setImgSrc(circleTokana1);
        }if(fahasivy1 === 10){
            setImgSrc(circleTokana2);
        }if(fahasivy1 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(fahasivy2 === 1){
            setImgSrc2(circle1);
        }if(fahasivy2 === 2){
            setImgSrc2(circle2);
        }if(fahasivy2 === 9){
            setImgSrc2(circleTokana1);
        }if(fahasivy2 === 10){
            setImgSrc2(circleTokana2);
        }if(fahasivy2 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(fahasivy4 === 1){
            setImgSrc4(circle1);
        }if(fahasivy4 === 2){
            setImgSrc4(circle2);
        }if(fahasivy4 === 9){
            setImgSrc4(circleTokana1);
        }if(fahasivy4 === 10){
            setImgSrc4(circleTokana2);
        }if(fahasivy4 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(fahasivy3 === 1){
            setImgSrc3(circle1);
        }if(fahasivy3 === 2){
            setImgSrc3(circle2);
        }if(fahasivy3 === 9){
            setImgSrc3(circleTokana1);
        }if(fahasivy3 === 10){
            setImgSrc3(circleTokana2);
        }if(fahasivy3 === 0){
            setImgSrc3(circleEmpty);
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

export default FourComponentC