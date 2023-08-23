import React, { useEffect, useState } from "react";

function FourComponent2(props){

    const circle1 = require('./images/circle1.png');
    const circle2 = require('./images/circle2.png');
    const circleTokana1 = require('./images/circleTokana1.png');
    const circleTokana2 = require('./images/circleTokana2.png');
    const circleEmpty = require('./images/emptyCircle.png');

    const haja2 = props.haja2;
    const haky2 = props.haky2;
    const sorota2 = props.sorota2;
    const sely2 = props.sely2;

    const[imgSrc, setImgSrc] = useState(null);
    const[imgSrc2, setImgSrc2] = useState(null);
    const[imgSrc3, setImgSrc3] = useState(null);
    const[imgSrc4, setImgSrc4] = useState(null);

    const active = props.isClickedforOverSees

    const hajaEffect2 = props.hajaEffect2;
    const hakyEffect2 = props.hakyEffect2;
    const sorotaEffect2 = props.sorotaEffect2;
    const selyEffect2 = props.selyEffect2;

    useEffect(() => {
        if(hajaEffect2 === 1){
            setImgSrc(circle1);
        }if(hajaEffect2 === 2){
            setImgSrc(circle2);
        }if(hajaEffect2 === 9){
            setImgSrc(circleTokana1);
        }if(hajaEffect2 === 10){
            setImgSrc(circleTokana2);
        }if(hajaEffect2 === 0){
            setImgSrc(circleEmpty)
        }if(hakyEffect2 === 1){
            setImgSrc2(circle1);
        }if(hakyEffect2 === 2){
            setImgSrc2(circle2);
        }if(hakyEffect2 === 9){
            setImgSrc2(circleTokana1);
        }if(hakyEffect2 === 10){
            setImgSrc2(circleTokana2);
        }if(hakyEffect2 === 0){
            setImgSrc2(circleEmpty)
        }if(selyEffect2 === 1){
            setImgSrc4(circle1);
        }if(selyEffect2 === 2){
            setImgSrc4(circle2);
        }if(selyEffect2 === 9){
            setImgSrc4(circleTokana1);
        }if(selyEffect2 === 10){
            setImgSrc4(circleTokana2);
        }if(selyEffect2 === 0){
            setImgSrc4(circleEmpty)
        }if(sorotaEffect2 === 1){
            setImgSrc3(circle1);
        }if(sorotaEffect2 === 2){
            setImgSrc3(circle2);
        }if(sorotaEffect2 === 9){
            setImgSrc3(circleTokana1);
        }if(sorotaEffect2 === 10){
            setImgSrc3(circleTokana2);
        }if(sorotaEffect2 === 0){
            setImgSrc3(circleEmpty);
        }
    }, [active])

    useEffect(()=>{
        if(haja2 === 1){
            setImgSrc(circle1);
        }if(haja2 === 2){
            setImgSrc(circle2);
        }if(haja2 === 9){
            setImgSrc(circleTokana1);
        }if(haja2 === 10){
            setImgSrc(circleTokana2);
        }if(haja2 === 0){
            setImgSrc(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(haky2 === 1){
            setImgSrc2(circle1);
        }if(haky2 === 2){
            setImgSrc2(circle2);
        }if(haky2 === 9){
            setImgSrc2(circleTokana1);
        }if(haky2 === 10){
            setImgSrc2(circleTokana2);
        }if(haky2 === 0){
            setImgSrc2(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sely2 === 1){
            setImgSrc4(circle1);
        }if(sely2 === 2){
            setImgSrc4(circle2);
        }if(sely2 === 9){
            setImgSrc4(circleTokana1);
        }if(sely2 === 10){
            setImgSrc4(circleTokana2);
        }if(sely2 === 0){
            setImgSrc4(circleEmpty)
        }
    },[])
    useEffect(()=>{
        if(sorota2 === 1){
            setImgSrc3(circle1);
        }if(sorota2 === 2){
            setImgSrc3(circle2);
        }if(sorota2 === 9){
            setImgSrc3(circleTokana1);
        }if(sorota2 === 10){
            setImgSrc3(circleTokana2);
        }if(sorota2 === 0){
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

export default FourComponent2