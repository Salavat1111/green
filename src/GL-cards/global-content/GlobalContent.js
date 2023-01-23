import React from 'react';
import './gl-content.css';
import mainPNG from '../imp/page1.jpg';
import mainLogo from '../imp/mainLogo.png';
import NumberFormat from 'react-number-format';
import axios from 'axios';


function Logo() {
    const [inputValue, setInputValue] = React.useState('')
    const [namberValue, setNamberValue] = React.useState('')
    const [visibelPopup, setVisibePopup] = React.useState(false);

    // const [changeClick, setChangeClick] = React.useState('')


    // function HandlePush() {
    //     const summaValue = inputValue + ' ' + namberValue;
    //     let token = '5590154386:AAGukf7OrTxwpZFnpRshNwWfU_jFJPt5rpI';
    //     const url = 'https://api.telegram.org/bot5590154386:AAGukf7OrTxwpZFnpRshNwWfU_jFJPt5rpI/sendMessage?chat_id=-1001617915108&text=';
    //     let xhttp = new XMLHttpRequest();
    //     xhttp.open('POST', url + summaValue, true, console.log(HandlePush));
    //     xhttp.send();
    // }

    function HandlePush() {
        const summaValue = inputValue + ' ' + namberValue;
        let token = '5590154386:AAGukf7OrTxwpZFnpRshNwWfU_jFJPt5rpI';
        const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-1001617915108&text=';
        axios.post(url + summaValue, {
            headers: {
                'content-type': 'application/json',
            },
        })
        setNamberValue('');
        setInputValue('');
    }


    const [visibleContainer, setVisibleContainer] = React.useState()

    const bablick = <div className='visible__container active'>
        <h1 className='visible__text-cotainer'>Успешно сохранено!</h1>
    </div>


    function HendlervisibleContainer() {
        setVisibleContainer(!visibleContainer)
    } setTimeout(() => { setVisibleContainer('') }, 5000);


    return (
        <div className='container--main--png'>
            <img alt="" src={mainPNG} />
            <div className='nickname--png'>
                <div className='content--heading'><h1>ПРОДАЖА ПИЛОМАТЕРИАЛОВ</h1></div>
                <div className='componet--logo--applications'>
                    <div className='logo-png-global-content'>
                        <img src={mainLogo} alt="" />
                    </div>
                    <div className='container--applications'>
                        <div className={visibelPopup ? 'visibel--popup active' : 'visibel--popup'} ></div>
                        <div className='title--consultation'>
                            <p>ЗАКАЗАТЬ БЕСПЛАТНУЮ КОСУЛЬТАЦИЮ СПЕЦИАЛИСТА</p>
                        </div>
                        <div className='title--input'>
                            <div className='input--color'>
                                <input placeholder='Введите ваше имя' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                            </div>
                            <div className='input--color'>
                                <NumberFormat
                                    className="field"
                                    format='###########'
                                    mask='_'
                                    name='namber'
                                    placeholder="8 (999) 333-22-11"
                                    value={namberValue}
                                    onChange={e => setNamberValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='title--button'>
                            <div onClick={HendlervisibleContainer}>
                                <button
                                    onClick={HandlePush}
                                    disabled={namberValue.length === 0}
                                    type='button'
                                > Заказать</button>
                            </div>
                        </div>
                        <div className='title--description'>
                            <p>
                                Нажимая на кнопку, вы даете согласие на
                                обработку персональных данных и соглашаетесь с&nbsp;
                                <font className="font--style--component">политикой конфиденциальности</font>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*-------------------------------------------------------------------------------------*/}
            {/* {<div className={visibleContainer ? 'visible__container active' : 'visible__container'}> */}
            {visibleContainer && bablick}
            {/*-------------------------------------------------------------------------------------*/}
        </div >
    );
}

export default Logo;