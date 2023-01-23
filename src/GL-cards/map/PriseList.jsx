import React from 'react';
import './maps.css';



function PriseList() {
    return (
        <div className='container--container--priselist'>
            <h1>Скачать прайс-лист</h1>
            <div className='container--priselist'>
                <a href='пиломатериал.pdf'><button className='button--click--block'>Скачать</button></a>
            </div>
        </div>
    );
}

export default PriseList;
