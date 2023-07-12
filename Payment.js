import style from './Payment.module.css';
import chip from './chip.png';
import cardtype from './cardtype.png';
import { useState } from 'react';
import PaymentForm from './PaymentForm';

const Payment = () => {

    const [position, setPosition] = useState('0px');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [roted, setRoted] = useState('0deg');

    const changeCard = () => {
        setPosition('-100px');
    }







    return (
        <div className={style.fullCover} style={{ paddingTop: '40px', backgroundColor: '#000', height: '100vh' }}>

            <div className={style.cardNumbers}>
                <h6 className='mb-3'><u>Sample Card Numbers</u></h6>
                <p>5555555555554444 - master</p>
                <p>4012888888881881 - visa</p>
                <p>6011000990139424 - discover</p>
                <p>374245455400126 - AMEX</p>
            </div>
            
            <div className={style.coverInner} style={{ transform: `rotateY(${roted})` }}>



                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <div className={style.leftCardName}>Credit Card</div>
                        <div className={style.rightCardType} style={{ backgroundImage: `url(${cardtype})`, backgroundPositionX: `${position}` }}></div>
                    </div>
                    <div className={style.cardChip}>
                        <img src={chip} />
                    </div>
                    <div className={style.cardNumber}>
                        {number ? number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '') : '**** **** **** ****'}
                        <div className={style.textRight}>
                            <div className={style.validThrough}>VALID<br />THRU</div>
                            <div className={style.monthYear}>{month ? month : '00'}/{year ? year : '00'}</div>
                        </div>
                    </div>
                    <div className={style.footerCard} onClick={changeCard}>
                        {name ? name : 'Card Holder Name'}
                    </div>
                </div>


                <div className={`${style.card} ${style.cardBack}`}>
                    <div className={style.cardHeader}>
                        <div className={style.backLine}></div>
                    </div>
                    <p className={style.authorizedSignature}><small>AUTHORIZED SIGNATURE</small></p>
                    <div className={`p-1 d-flex align-items-center justify-content-end ${style.cvcPlace}`}>
                        <div className='text-dark'>{cvc ? cvc : '***'}</div>
                    </div>
                    <p className={style.demoText}><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</small></p>
                </div>
            </div>

            <PaymentForm cvc={cvc} setCvc={setCvc} roted={roted} setRoted={setRoted} month={month} setMonth={setMonth} year={year} setYear={setYear} setPosition={setPosition} name={name} setName={setName} number={number} setNumber={setNumber} />
        </div>
    )
}
export default Payment;