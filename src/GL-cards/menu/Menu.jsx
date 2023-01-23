import React from 'react';
import './menu.css';
import { Logo } from '../../GL-cards';
import { Link } from 'react-router-dom';


function Menu({ items, ClickedSection, clickedBurger }) {
    return (
        <div className="container--global-li">
            <div className='container--component-flex'>
                <div className='conteiner--page'>
                    <Logo />
                </div>
                <div className='block--width--li'>
                    <div className='container--li-flex'>
                        {items && items.map((name) =>

                            <div className='block--text-li'>
                                <Link to={name.href} className='block--text-li--li'>{name.value}</Link>
                            </div>

                        )}
                    </div>
                </div>
                <div className='namber--container-flex'>
                    <p>+7 (917) 950 46 36</p>
                </div>


                <div className='ctnt--btn--burger'>
                    <div className='container--burger'
                        onClick={ClickedSection}
                    >
                        <div className={clickedBurger ? 'btn--burger active' : 'btn--burger'} >
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
