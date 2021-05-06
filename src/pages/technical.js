import React from 'react';
import SwingDoorAnimation from '../components/swingDoorAnimation';

export function TechnicalPage() {
    return (
        <div className="row">
            <div className="col-6">
                <h2 style={{ marginLeft: '20px', marginTop: '10px' }}>Technical Information</h2>
                <p className="text-break" style={{ textAlign: 'justify', boxSizing: 'border-box', padding: '0 30px' }}>
                    Swing Gate Opening Mechanism are designed in two ways either single leaf or twin leaf,
                    and they are both operating in the same way and direction. You can choose if you will
                    have it gate mounted or underground gate operators. The gate mounted operators is less
                    expensive, and the installation is much easier compare to the other kind. The underground
                    gate mechanisms are operated through the motor and it must have enclosed housing.
                    This kind of gate mechanism is not suitable to flooded area because the operation will be affected.
                    Trouble will be experienced in either opening or closing of the gate.
                    <br />
                    Electric Swing Gate Opening Mechanism are types of gate system that are utilized to ensure
                    safety of homes and businesses. Whether the area is small or huge, these are reliable security
                    fences that you can trust. Both automatic and electric security gates are easier to install,
                    and the work is mainly ground work. These mechanisms will automatically open and close the gate
                    without getting out of your car. You will just press the button, and the security gate will open
                    and close. The space that you have in the gate area will be determined so that you will choose if
                    the swing will be inward or outward direction. One sided swing security gates are built only with a
                    particular section. The double gate has two sections that will swing in inward or outward paths.
                </p>
            </div>
            <div className="col-6">
            <SwingDoorAnimation />
            </div>
        </div>
    )
}