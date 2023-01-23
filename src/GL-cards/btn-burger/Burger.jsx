import React from 'react';
import './burger.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaTelegram, FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'; // Телеграм, Вотсап, Телефон

function Burger({ items, clickedBurger, ClickedSection, setClickedBurger }) {



    const sortRef = React.useRef();
    const handleOutsideClick = (e) => {
        if (e.path.includes(sortRef.current)) {
            setClickedBurger(false)
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
    // ref={sortRef}


    return (
        <div className="btn--container">
            <div className='btn--component--flex'>
                <div className='btn--mune--li' ref={sortRef}>
                    {items && items.map((name) =>
                        <div className='btn--li' >
                            <Link to={name.href} className='block--link' >{name.value}</Link>
                        </div>
                    )}
                </div>
                <div className='w--polosa'></div>
                <div className='icons--container--burger'>
                    <div className='icons--font--burger'>
                        <FaTelegram />
                        <a href='https://t.me/pilocvk'>@pilosorry_bot</a>
                    </div>
                    <div className='icons--font--burger'>
                        <FaWhatsappSquare />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                    <div className='icons--font--burger'>
                        <FaPhoneSquareAlt />
                        <p>+7 (917) 950 46 36</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Burger;
