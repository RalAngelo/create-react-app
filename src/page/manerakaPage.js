import React, {useEffect, useState} from 'react'

function SikidyGenerate(props){
    const srcValue = props.circleValue

    const circleEmpty = require('./images/emptyCircle.png')
    const circle1 = require('./images/circle1.png')
    const circle2 = require('./images/circle2.png')
    const circleTokana1 = require('./images/circleTokana1.png')
    const circleTokana2 = require('./images/circleTokana2.png')

    const [imgSrc, setImgSrc] = useState(null)

    useEffect(()=>{
        if(srcValue === 1){
            setImgSrc(circle1)
        }
        if(srcValue === 2){
            setImgSrc(circle2)
        }
        if(srcValue === undefined){
            setImgSrc(circleEmpty)
        }
        if(srcValue === 9){
            setImgSrc(circleTokana1)
        }
        if(srcValue === 10){
            setImgSrc(circleTokana2)
        }
    },[])

    return(
        <img 
            src={imgSrc}
            width = '27.5'
            height= '27.2'
            className='effect' 
        />
    )
}

export default SikidyGenerate