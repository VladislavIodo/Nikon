import React from 'react';

export default function DetailsThumb({images}) {
    return (
        <div className="thumb">
            {
                images.map((img, index) => (
                    <img src={img} alt="" key={index}/>
                ))
            }
        </div>
    )
}