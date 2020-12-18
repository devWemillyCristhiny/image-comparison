import React from 'react'
import './ImageComparison.css'
import Image001 from '../image/Image001.jpg'
import Image002 from '../image/Image002.JPG'

export default function(){
    return (
        <div className="container">
            <div className="imageBox imageBefore"><img src={Image001}/></div>
            <div className="imageBox imageAfter"><img src={Image002}/></div>
        </div>
    )
}