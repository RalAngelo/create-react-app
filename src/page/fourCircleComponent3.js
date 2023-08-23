import React, { useEffect, useState } from "react";

function FourComponent3(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png');

    const haja3 = props.haja3;
    const haky3 = props.haky3;
    const sorota3 = props.sorota3;
    const sely3 = props.sely3;

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const hajaEffect3=props.hakyEffect3
    const hakyEffect3=props.hakyEffect3
    const sorotaEffect3=props.sorotaEffect3
    const selyEffect3=props.selyEffect3

    const active = props.isClickedforOverSees

    useEffect(() => {
        if(hajaEffect3 === 1){
            setImgSrc(circle1);
        }if(hajaEffect3 === 2){
            setImgSrc(circle2);
        }if(hajaEffect3 === 9){
            setImgSrc(circleTokana1);
        }if(hajaEffect3 === 10){
            setImgSrc(circleTokana2);
        }if(hajaEffect3 === 0){
            setImgSrc(circleEmpty)
        }if(hakyEffect3 === 1){
            setImgSrc2(circle1);
        }if(hakyEffect3 === 2){
            setImgSrc2(circle2);
        }if(hakyEffect3 === 9){
            setImgSrc2(circleTokana1);
        }if(hakyEffect3 === 10){
            setImgSrc2(circleTokana2);
        }if(hakyEffect3 === 0){
            setImgSrc2(circleEmpty)
        }if(selyEffect3 === 1){
            setImgSrc4(circle1);
        }if(selyEffect3 === 2){
            setImgSrc4(circle2);
        }if(selyEffect3 === 9){
            setImgSrc4(circleTokana1);
        }if(selyEffect3 === 10){
            setImgSrc4(circleTokana2);
        }if(selyEffect3 === 0){
            setImgSrc4(circleEmpty)
        }if(sorotaEffect3 === 1){
            setImgSrc3(circle1);
        }if(sorotaEffect3 === 2){
            setImgSrc3(circle2);
        }if(sorotaEffect3 === 9){
            setImgSrc3(circleTokana1);
        }if(sorotaEffect3 === 10){
            setImgSrc3(circleTokana2);
        }if(sorotaEffect3 === 0){
            setImgSrc3(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(haja3 === 1){
            setImgSrc(circle1);
        }if(haja3 === 2){
            setImgSrc(circle2);
        }if(haja3 === 9){
            setImgSrc(circleTokana1);
        }if(haja3 === 10){
            setImgSrc(circleTokana2);
        }if(haja3 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(haky3 === 1){
            setImgSrc2(circle1);
        }if(haky3 === 2){
            setImgSrc2(circle2);
        }if(haky3 === 9){
            setImgSrc2(circleTokana1);
        }if(haky3 === 10){
            setImgSrc2(circleTokana2);
        }if(haky3 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sely3 === 1){
            setImgSrc4(circle1);
        }if(sely3 === 2){
            setImgSrc4(circle2);
        }if(sely3 === 9){
            setImgSrc4(circleTokana1);
        }if(sely3 === 10){
            setImgSrc4(circleTokana2);
        }if(sely3 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sorota3 === 1){
            setImgSrc3(circle1);
        }if(sorota3 === 2){
            setImgSrc3(circle2);
        }if(sorota3 === 9){
            setImgSrc3(circleTokana1);
        }if(sorota3 === 10){
            setImgSrc3(circleTokana2);
        }if(sorota3 === 0){
            setImgSrc3(circleEmpty);
        }
    },[])

    return(
        <div className='THMDisplay'>
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

export default FourComponent3