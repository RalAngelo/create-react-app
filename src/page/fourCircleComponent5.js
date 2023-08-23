import React, { useEffect, useState } from "react";

function FourComponent5(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png');

    const haja1 = props.haja1;
    const haky1 = props.haky1;
    const sorota1 = props.sorota1;
    const sely1 = props.sely1;

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const active = props.isClickedforOverSees;

    const hajaEffect1 = props.hajaEffect1;
    const hakyEffect1 = props.hakyEffect1;
    const sorotaEffect1 = props.sorotaEffect1;
    const selyEffect1 = props.selyEffect1;

    useState(() => {
        if(hajaEffect1 === 1){
            setImgSrc(circle1);
        }if(hajaEffect1 === 2){
            setImgSrc(circle2);
        }if(hajaEffect1 === 9){
            setImgSrc(circleTokana1);
        }if(hajaEffect1 === 10){
            setImgSrc(circleTokana2);
        }if(hajaEffect1 === 0){
            setImgSrc(circleEmpty)
        }if(hakyEffect1 === 1){
            setImgSrc2(circle1);
        }if(hakyEffect1 === 2){
            setImgSrc2(circle2);
        }if(hakyEffect1 === 9){
            setImgSrc2(circleTokana1);
        }if(hakyEffect1 === 10){
            setImgSrc2(circleTokana2);
        }if(hakyEffect1 === 0){
            setImgSrc2(circleEmpty)
        }if(selyEffect1 === 1){
            setImgSrc4(circle1);
        }if(selyEffect1 === 2){
            setImgSrc4(circle2);
        }if(selyEffect1 === 9){
            setImgSrc4(circleTokana1);
        }if(selyEffect1 === 10){
            setImgSrc4(circleTokana2);
        }if(selyEffect1 === 0){
            setImgSrc4(circleEmpty)
        }if(sorotaEffect1 === 1){
            setImgSrc3(circle1);
        }if(sorotaEffect1 === 2){
            setImgSrc3(circle2);
        }if(sorotaEffect1 === 9){
            setImgSrc3(circleTokana1);
        }if(sorotaEffect1 === 10){
            setImgSrc3(circleTokana2);
        }if(sorotaEffect1 === 0){
            setImgSrc3(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(haja1 === 1){
            setImgSrc(circle1);
        }if(haja1 === 2){
            setImgSrc(circle2);
        }if(haja1 === 9){
            setImgSrc(circleTokana1);
        }if(haja1 === 10){
            setImgSrc(circleTokana2);
        }if(haja1 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(haky1 === 1){
            setImgSrc2(circle1);
        }if(haky1 === 2){
            setImgSrc2(circle2);
        }if(haky1 === 9){
            setImgSrc2(circleTokana1);
        }if(haky1 === 10){
            setImgSrc2(circleTokana2);
        }if(haky1 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sely1 === 1){
            setImgSrc4(circle1);
        }if(sely1 === 2){
            setImgSrc4(circle2);
        }if(sely1 === 9){
            setImgSrc4(circleTokana1);
        }if(sely1 === 10){
            setImgSrc4(circleTokana2);
        }if(sely1 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sorota1 === 1){
            setImgSrc3(circle1);
        }if(sorota1 === 2){
            setImgSrc3(circle2);
        }if(sorota1 === 9){
            setImgSrc3(circleTokana1);
        }if(sorota1 === 10){
            setImgSrc3(circleTokana2);
        }if(sorota1 === 0){
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

export default FourComponent5