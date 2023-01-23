import './contacts.css';
import React from 'react';
import Cub from '../imp/Group30.png';
import { FaTelegram, FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'; // Телеграм, Вотсап, Телефон



function Сontacts() {
    return (
        <div className='conteiner--contacts'>
            <h1>Контакты</h1>
            <div className='conteiner--flex--cub'>
                <div className='conteiner--img--adress'>
                    <div className='green--img'> <img src={Cub} alt="" /></div>
                    <div>
                        <div className='logo--green--text'><p>пиломатериалы63.рф</p></div>
                        <div className='black--text--adress'><p>Наш адрес: <font className='green--text--adress'>г. Чапаевск, ул. Котовского 36</font></p></div>
                    </div>
                </div>

                <div className='icons--container'>
                    <div className='icons--font'>
                        <FaTelegram />
                        <a href='https://t.me/pilocvk'>@pilosorry_bot</a>
                    </div>
                    <div className='icons--font'>
                        <FaWhatsappSquare />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                    <div className='icons--font'>
                        <FaPhoneSquareAlt />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Сontacts;