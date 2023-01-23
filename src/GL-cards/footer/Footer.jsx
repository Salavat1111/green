import './footer.css';
import React from 'react';
import Cub from '../imp/Group30.png';
import { FaTelegram, FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'; // Телеграм, Вотсап, Телефон
import { Link } from 'react-router-dom';


function Footer({ items }) {
    return (
        <div className='conteiner--contacts--Footer'>
            <div className='footer--flex--block'>
                {items && items.map((name) =>

                    <div className='block--text-li--footer'>
                        <Link to={name.href} className='block--text-li--li--footer'>{name.value}</Link>
                    </div>

                )}
            </div>
            <div className='conteiner--flex--cub--Footer'>



                <div className='conteiner--img--adress--Footer'>
                    <div className='green--img--Footer'> <img src={Cub} alt="" /></div>
                    <div>
                        <div className='logo--green--text--Footer'><p>пиломатериалы63.рф</p></div>
                        <div className='black--text--adress--Footer'><p>Наш адрес: <font className='green--text--adress--Footer'>г. Чапаевск, ул. Котовского 36</font></p></div>
                    </div>
                </div>

                <div className='icons--container--Footer'>
                    <div className='icons--font--Footer'>
                        <FaTelegram />
                        <a href='https://t.me/pilocvk'>@pilosorry_bot</a>
                    </div>
                    <div className='icons--font--Footer'>
                        <FaWhatsappSquare />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                    <div className='icons--font--Footer'>
                        <FaPhoneSquareAlt />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;