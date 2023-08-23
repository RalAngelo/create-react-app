import React, { useEffect, useState } from "react";

function FourComponentC4(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png')

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const kiba1 = props.kiba1;
    const kiba2 = props.kiba2;
    const kiba3 = props.kiba3;
    const kiba4 = props.kiba4;

    const active = props.isClickedforOverSees

    const kibaEffect1 = props.kibaEffect1;
    const kibaEffect2 = props.kibaEffect2;
    const kibaEffect3 = props.kibaEffect3;
    const kibaEffect4 = props.kibaEffect4;

    useEffect(() => {
        if(kibaEffect1 === 1){
            setImgSrc(circle1);
        }if(kibaEffect1 === 2){
            setImgSrc(circle2);
        }if(kibaEffect1 === 9){
            setImgSrc(circleTokana1);
        }if(kibaEffect1 === 10){
            setImgSrc(circleTokana2);
        }if(kibaEffect1 === 0){
            setImgSrc(circleEmpty)
        }if(kibaEffect2 === 1){
            setImgSrc2(circle1);
        }if(kibaEffect2 === 2){
            setImgSrc2(circle2);
        }if(kibaEffect2 === 9){
            setImgSrc2(circleTokana1);
        }if(kibaEffect2 === 10){
            setImgSrc2(circleTokana2);
        }if(kibaEffect2 === 0){
            setImgSrc2(circleEmpty);
        }if(kibaEffect3 === 1){
            setImgSrc3(circle1);
        }if(kibaEffect3 === 2){
            setImgSrc3(circle2);
        }if(kibaEffect3 === 9){
            setImgSrc3(circleTokana1);
        }if(kibaEffect3 === 10){
            setImgSrc3(circleTokana2);
        }if(kibaEffect3 === 0){
            setImgSrc3(circleEmpty);
        }if(kibaEffect4 === 1){
            setImgSrc4(circle1);
        }if(kibaEffect4 === 2){
            setImgSrc4(circle2);
        }if(kibaEffect4 === 9){
            setImgSrc4(circleTokana1);
        }if(kibaEffect4 === 10){
            setImgSrc4(circle2);
        }if(kibaEffect4 === 0){
            setImgSrc4(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(kiba1 === 1){
            setImgSrc(circle1);
        }if(kiba1 === 2){
            setImgSrc(circle2);
        }if(kiba1 === 9){
            setImgSrc(circleTokana1);
        }if(kiba1 === 10){
            setImgSrc(circleTokana2);
        }if(kiba1 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(kiba2 === 1){
            setImgSrc2(circle1);
        }if(kiba2 === 2){
            setImgSrc2(circle2);
        }if(kiba2 === 9){
            setImgSrc2(circleTokana1);
        }if(kiba2 === 10){
            setImgSrc2(circleTokana2);
        }if(kiba2 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(kiba3 === 1){
            setImgSrc3(circle1);
        }if(kiba3 === 2){
            setImgSrc3(circle2);
        }if(kiba3 === 9){
            setImgSrc3(circleTokana1);
        }if(kiba3 === 10){
            setImgSrc3(circleTokana2);
        }if(kiba3 === 0){
            setImgSrc3(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(kiba4 === 1){
            setImgSrc4(circle1);
        }if(kiba4 === 2){
            setImgSrc4(circle2);
        }if(kiba4 === 9){
            setImgSrc4(circleTokana1);
        }if(kiba4 === 10){
            setImgSrc4(circleTokana2);
        }if(kiba4 === 0){
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

export default FourComponentC4