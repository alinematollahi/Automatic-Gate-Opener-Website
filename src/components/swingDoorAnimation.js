import React from 'react';
import '../styles/swingDoorAnimation.css'

function SwingDoorAnimation(props) {
    return (
        <div id="swing-door-animation-container">

            <div id="empty-space"></div>

            <div id="wall-left-1"></div>

            <div id="part-3">
                <div id="set-space-back-base-left">
                    <div id="motor1">
                        <div id="motor1-part2-set-space"></div>
                        <div id="motor1-part2"></div>
                    </div>
                </div>
                <div id="back-base-left"></div>
                <div id="wall-left-2"></div>
            </div>

            <div id="hinge-container-left">
                <div id="set-space-hinge-left"></div>
                <div id="hinge-left">
                <div id="hinge-left-circle"></div>
                </div>
            </div>

            <div id="part-5">
                <div id="set-space-doors"></div>
                <div id="door-left-container">
                    <div id="set-space-door-left"></div>
                    <div id="door-left"></div>
                    <div id="edge-left">
                        <div id="front-base-left"></div>
                    </div>
                </div>

                <div id="door-right-container">
                    <div id="edge-right">
                        <div id="front-base-right"></div>
                    </div>
                    <div id="door-right"></div>
                    <div id="set-space-door-right"></div>
                </div>
            </div>

            <div id="hinge-container-right">
                <div id="set-space-hinge-right"></div>
                <div id="hinge-right">
                    <div id="hinge-right-circle"></div>
                </div>
            </div>

            <div id="part-7">
                <div id="set-space-back-base-right">
                    <div id="motor2">
                        <div id="motor2-part2-set-space"></div>
                        <div id="motor2-part2"></div>
                    </div>
                </div>
                <div id="back-base-right"></div>
                <div id="wall-right-2"></div>
            </div>

            <div id="wall-right-1"></div>

        </div>
    );
}

export default SwingDoorAnimation;