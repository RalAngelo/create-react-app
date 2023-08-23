import React, {useEffect, useState} from 'react'

function MotherSquare(props) {
    const dataSrc = props.squareValue
    const callBack = props.onClickImg
    const isActive = !props.disabled
    var isReseted = props.isReseted ? true : false
    var isClicked = props.isClicked ? true : false
    const shake = props.shake ? true : false
    const disabledAction = props.disabledAction
    const inverseCondition = props.inverseCondition;

    const imgEmpty = require('./images/imgEmpty.png');
    const img1 = require('./images/img1.png');
    const img2 = require('./images/img2.png');

    const [imgSrc, setImgSrc] = useState(null)
    const [nbrClick, setNrbClick] = useState(0)

    useEffect(() => {
        if(dataSrc === 1){
            setImgSrc(img1)
        }
        if(dataSrc === 2){
            setImgSrc(img2)
        }
    }, [inverseCondition]);
    
    useEffect(()=>{
        if(dataSrc === undefined){
            setImgSrc(imgEmpty)
        }
        if(dataSrc === 1){
            setImgSrc(img1)
        }
        if(dataSrc === 2){
            setImgSrc(img2)
        }
    },[])
    
    useEffect(() => {
        if(isReseted){
            setImgSrc(imgEmpty)
            setNrbClick(0)
        }
    }, [isReseted])

    useEffect(()=>{
        if(dataSrc === 1){
            setImgSrc(img1)
        }
        if(dataSrc === 2){
            setImgSrc(img2)
        }
    },[isClicked])

    const ImgOneOrTwo = () => {
        var backGround = null;
        var cliquedTime = (nbrClick + 1 < 3 ) ? nbrClick + 1 : 1;
        if (cliquedTime === 1) {
            backGround = img1;
        } else if (cliquedTime === 0){
            backGround = imgEmpty
        }
        else{
            backGround = img2;
        }
        setNrbClick(cliquedTime);
        setImgSrc(backGround)

        return cliquedTime;
    }
    
    return(
        
        <img 
            src={imgSrc}
            className={'effect '+ (shake ? 'nextSquare' : '')}
            data-index={props.rowIndex} 
            data-name={props.name}
            width='75'
            height='75' 
            onClick={() => {
                if (isActive) {
                    var click = ImgOneOrTwo();
                    callBack(props.rowIndex, click);
                    disabledAction(false)
                } else {
                    disabledAction(true)
                }        
            }} 
            alt=""
        />
    );
    
}

export default MotherSquare;