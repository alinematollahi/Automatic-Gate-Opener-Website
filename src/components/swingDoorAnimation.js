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

            <div id="hinge-container-left">
                <div id="set-space-hinge-left"></div>
                <div id="hinge-left"></div>
            </div>

            <div id="part-5">
                <div id="set-space-doors"></div>
                <div id="door-left"></div>
                <div id="edges">
                    <div id="edge-left"></div>
                    <div id="set-space-edges"></div>
                    <div id="edge-right"></div>
                </div>
                <div id="door-right"></div>
            </div>

            <div id="hinge-container-right">
                <div id="set-space-hinge-right"></div>
                <div id="hinge-right"></div>
            </div>

            <div id="part-7">
                <div id="back-base-right"></div>
                <div id="wall-right-2"></div>
            </div>

            <div id="wall-right-1"></div>
            
        </div>
    );
}

export default SwingDoorAnimation;