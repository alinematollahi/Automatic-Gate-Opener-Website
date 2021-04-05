import React from 'react';
import '../styles/swingDoorAnimation.css'

function SwingDoorAnimation(props) {
    return (
        <div id="swing-door-animation-container">
            <div id="empty-space"></div>
            <div id="wall-left-1"></div>
            <div id="part-3">
                <div id="back-base-left"></div>
                <div id="wall-left-2"></div>
            </div>
            <div id="hinge-left"></div>
            <div id="part-5">

            </div>
            <div id="hinge-right"></div>
            <div id="part-7">
                <div id="back-base-right"></div>
                <div id="wall-right-2"></div>
            </div>
            <div id="wall-right-1"></div>
        </div>
    );
}

export default SwingDoorAnimation;