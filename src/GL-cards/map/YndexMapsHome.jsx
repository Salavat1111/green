import React from 'react';
import './maps.css';



function YndexMapsHome() {
    return (
        <div className='container--maps--background'>
            <h1>Где мы находимся</h1>
            <div className='container--maps'>
                <iframe className='maps' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e98ae0538d3e12b7ac273d458ddb5584829d32f97a75b967c5225639e2ec3f5&amp;source=constructor" width="745" height="400" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default YndexMapsHome;


