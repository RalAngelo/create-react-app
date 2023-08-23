import React, { useEffect, useState } from "react";

function FourComponent8(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png');

    const haja4 = props.haja4;
    const haky4 = props.haky4;
    const sorota4 = props.sorota4;
    const sely4 = props.sely4;

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const active = props.isClickedforOverSees

    const hajaEffect4 = props.hajaEffect4;
    const hakyEffect4 = props.hakyEffect4;
    const sorotaEffect4 = props.sorotaEffect4;
    const selyEffect4 = props.selyEffect4;

    useEffect(() => {
        if(hajaEffect4 === 1){
            setImgSrc(circle1);
        }if(hajaEffect4 === 2){
            setImgSrc(circle2);
        }if(hajaEffect4 === 9){
            setImgSrc(circleTokana1);
        }if(hajaEffect4 === 10){
            setImgSrc(circleTokana2);
        }if(hajaEffect4 === 0){
            setImgSrc(circleEmpty)
        }if(hakyEffect4 === 1){
            setImgSrc2(circle1);
        }if(hakyEffect4 === 2){
            setImgSrc2(circle2);
        }if(hakyEffect4 === 9){
            setImgSrc2(circleTokana1);
        }if(hakyEffect4 === 10){
            setImgSrc2(circleTokana2);
        }if(hakyEffect4 === 0){
            setImgSrc2(circleEmpty)
        }if(selyEffect4 === 1){
            setImgSrc4(circle1);
        }if(selyEffect4 === 2){
            setImgSrc4(circle2);
        }if(selyEffect4 === 9){
            setImgSrc4(circleTokana1);
        }if(selyEffect4 === 10){
            setImgSrc4(circleTokana2);
        }if(selyEffect4 === 0){
            setImgSrc4(circleEmpty)
        }if(sorotaEffect4 === 1){
            setImgSrc3(circle1);
        }if(sorotaEffect4 === 2){
            setImgSrc3(circle2);
        }if(sorotaEffect4 === 9){
            setImgSrc3(circleTokana1);
        }if(sorotaEffect4 === 10){
            setImgSrc3(circleTokana2);
        }if(sorotaEffect4 === 0){
            setImgSrc3(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(haja4 === 1){
            setImgSrc(circle1);
        }if(haja4 === 2){
            setImgSrc(circle2);
        }if(haja4 === 9){
            setImgSrc(circleTokana1);
        }if(haja4 === 10){
            setImgSrc(circleTokana2);
        }if(haja4 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(haky4 === 1){
            setImgSrc2(circle1);
        }if(haky4 === 2){
            setImgSrc2(circle2);
        }if(haky4 === 9){
            setImgSrc2(circleTokana1);
        }if(haky4 === 10){
            setImgSrc2(circleTokana2);
        }if(haky4 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sely4 === 1){
            setImgSrc4(circle1);
        }if(sely4 === 2){
            setImgSrc4(circle2);
        }if(sely4 === 9){
            setImgSrc4(circleTokana1);
        }if(sely4 === 10){
            setImgSrc4(circleTokana2);
        }if(sely4 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sorota4 === 1){
            setImgSrc3(circle1);
        }if(sorota4 === 2){
            setImgSrc3(circle2);
        }if(sorota4 === 9){
            setImgSrc3(circleTokana1);
        }if(sorota4 === 10){
            setImgSrc3(circleTokana2);
        }if(sorota4 === 0){
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

export default FourComponent8