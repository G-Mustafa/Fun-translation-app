import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => (
    <Tilt className="Tilt" options={{ max : 35,scale : 1.1 }} style={{ height: 150, width: 150, margin: 20 }} >
        <div id='logo' className="Tilt-inner"></div>
    </Tilt>
    )

export default Logo;