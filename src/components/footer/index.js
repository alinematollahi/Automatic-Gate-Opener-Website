import React from 'react';

export function Footer() {
    return (
        <div className="row bg-dark text-white">
            <div className="col-4" style={footerStyle}>
                CONTACT
                <br /><br />
                Email : info@example.com
                <br />
                Address : Copenhagen capital region
                <br />
                Tell: +45 123456789
                <br />
            </div>
            <div className="col-4" style={footerStyle}>
                ABOUT COMPANY
                <br /><br />
                This text is for test This text is for test<br />
                This text is for test This text is for test<br />
                This text is for test This text is for test<br />
                This text is for test This text is for test<br />
            </div>
            <div className="col-4" style={footerStyle}>
                TREND PRODUCTS
                <br /><br />
                <a href='#'>FAAC 402 CBC Standard Basic Kit</a>
                <br />
                <a href='#'>FAAC 412 230V Swing Gate Operator</a>
                <br />
                <a href='#'>FAAC 400 CBACR Rapid Basic Kit</a>
                <br />
                <a href='#'>FAAC 415 Basic Kit 115VAC</a>
            </div>
        </div>
    );
}

let footerStyle = {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
    boxSizing: 'border-box'
}