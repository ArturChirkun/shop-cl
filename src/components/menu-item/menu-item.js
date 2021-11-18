import React from "react";

import './menu-item.scss';

export const MenuItem = ({title, imgUrl, size}) => {

    return (
        <div className={`${size} menu-item`}>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imgUrl})`
                }} />
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    SHOP CART
                </span>
            </div>
        </div>
    )

}