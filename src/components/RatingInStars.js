import React from 'react';

export default function RatingInStars(props) {
    return (
        <div className="rating-container">
            <div style={{
                width: props.rating * 20 + '%',
                height: 28 + 'px',
                backgroundColor: '#FFC107',
                position: "absolute",
            }}>
            </div>
            <img src="stars.svg" alt="rating" style={{
                position: "absolute",
                top: -1,
                left: -1
            }}/>
        </div>
    );
}
