import React from 'react'

function ImageDesc(props) {
    return (
        <img src={props.source} alt={props.altText}></img>
    )
}

export default ImageDesc