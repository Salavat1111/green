import React from 'react';
import './asso.css';
import { FaTimes } from "react-icons/fa";


function Assortment({ list }) {

    const [visebleClick, setVisebleClick] = React.useState();

    const ClickViseble = (index) => {
        setVisebleClick(index)
        console.log()
    }
    const clickedVisbleSort = () => {
        setVisebleClick(!visebleClick)
    }

    const sortRef = React.useRef();
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisebleClick(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);


    return (

        <div className='container--assortment' ref={sortRef}>
            <h1 className='text--block--assortment'>Ассортимент</h1>
            <div className='flex--block--card'>
                {list && list.map((name, index) =>
                    <div className="containet--card">
                        <img src={name.image} />
                        <h1 className='phone--H--font'>{name.text}</h1>
                        <p className='phone--font--size'>{name.priceGreen}</p>
                        <button className='button--containet--card'
                            onClick={() => ClickViseble(index)} key={`${name}_${index}`}
                        >Посмотреть</button>
                        <div
                            className={visebleClick === index ? 'container--dm-modal ' : 'container--dm-modal active'}
                        >
                            <div className='button--container'>
                                <div className='viseble--cliked--flex'>
                                    <div
                                        onClick={clickedVisbleSort}
                                        className='viseble--cliked'>
                                        < FaTimes />
                                    </div>
                                </div>
                                <div className='container--title--option'>
                                    {name.text}
                                </div>
                                <div className='container--card--price'>
                                    <div className='container--flex--page--price'>




                                        <div className='zg--container--page--price'>

                                            <div className='container--page--price'>
                                                <div className='flex--block--page--price'>
                                                    <div className='page--option'><img src={name.page} /></div>
                                                    <div className='flex--cont--priceGreen'>
                                                        <div className='cont--price-text'>
                                                            <div className='price--X'>
                                                                <p>Цена за шт:</p>
                                                            </div>
                                                            <p>{name.price}</p>
                                                        </div>
                                                        <div className='cont--price-priceGreen'>
                                                            <div className='price--X'>
                                                                <p>Цена онлайн:</p>
                                                            </div>
                                                            <p>{name.priceGreen}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='container--stripe'></div>
                                                <div className='container--spanish--w--green'>
                                                    <div className='cubick-mg-r'>
                                                        <p className='text--green'>{name.volume}</p>
                                                    </div>
                                                    <p className='text--green'>{name.priceСube}</p>
                                                </div>
                                                <div className='container--specifications'>
                                                    <h2>{name.specifications}</h2>
                                                    <div className='text--specifications'>
                                                        <div className='text--speci--spanich'>
                                                            <div className='container--spanish--w'> <p>{name.where}</p></div>
                                                            <p> {name.whereX}</p>
                                                        </div>
                                                        <div className='text--speci--spanich'>
                                                            <div className='container--spanish--w'><p>{name.length}</p></div>
                                                            <p>{name.lengthX}</p>
                                                        </div>
                                                        <div className='text--speci--spanich'>
                                                            <div className='container--spanish--w'><p>{name.variety}</p></div>
                                                            <p>  {name.varietyX}</p>
                                                        </div>
                                                        <div className='text--speci--spanich'><div><p>{name.thickness}</p></div>
                                                            <p>  {name.thicknessX}</p>
                                                        </div>
                                                        <div className='text--speci--spanich'><div className='container--spanish--w'><p>{name.width}</p></div>
                                                            <p>    {name.widthX}</p>
                                                        </div>
                                                        <div className='text--speci--spanich'><div className='container--spanish--w'><p>{name.quantity}</p></div>
                                                            <p>    {name.unit}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>





                                        <div className='container--options--price'>
                                            <h2>Наличие:&nbsp;
                                                <font className='font--nal'>{name.availability}</font>
                                            </h2>
                                            <p>Оплата:</p>
                                            <li>
                                                — Картой / наличными при получении
                                            </li>
                                            <li>
                                                — Безналом по счёту
                                            </li>
                                            <p className='dilivery'>Доставка: точно и в срок</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Assortment;