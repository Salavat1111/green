import React from 'react';
import './mainlogo.css';
import mainLogo from '../imp/Group30.png';




function Logo() {
    return (
        <div className='container--logo-png'>
            <img src={mainLogo} alt="" />
            <div className='block--logo-text'>
                <p>
                    пиломатериалы63.рф
                </p>
            </div>
        </div>
    );
}

export default Logo;
