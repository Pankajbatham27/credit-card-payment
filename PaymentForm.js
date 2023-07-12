import { useEffect } from 'react';
import style from './Payment.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentForm = ({ number, setNumber, name, setName, setPosition, month, setMonth, year, setYear, setRoted, cvc, setCvc }) => {

    const cardNumebrHandler = (event) => {

        const cardType = GetCardType(event.target.value);

        if(cardType === 'Visa'){
            setPosition('0px')
        }else if(cardType === 'Mastercard'){
            setPosition('-95px')
        }else if(cardType === 'AMEX'){
            setPosition('-195px')
        }else if(cardType === 'Discover'){
            setPosition('-295px')
        }
        setNumber(event.target.value)
    }
    const cardHolderHandler = (event) => {
        setName(event.target.value)
    }

    function GetCardType(number) {
        // visa
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "Visa";

        // Mastercard 
        // Updated for Mastercard 2017 BINs expansion
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
            return "Mastercard";

        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "AMEX";

        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "Discover";

        // Diners
        re = new RegExp("^36");
        if (number.match(re) != null)
            return "Diners";

        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return "Diners - Carte Blanche";

        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return "JCB";

        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return "Visa Electron";

        return "";
    }

    const monthHandler = (event) => {
        setMonth(event.target.value)
    }

    const yearHandler = (event) => {
        setYear(event.target.value)
    }

    const cvcHandler = () => {
        setRoted('180deg')  
    }

    const cvcRemove = () => {
        setRoted('0deg')
    }

    const cvcValue = (event) => {
        setCvc(event.target.value)
    }

    return (
        <div className={style.cardDetails}>
            <div>
                <input maxLength={16} value={number} onChange={cardNumebrHandler} className='form-control' placeholder="CARD NUMBER" />
            </div>
            <div>
                <input onChange={cardHolderHandler} value={name} className='form-control' placeholder="CARD HOLDER NAME" />
            </div>

            <div className={style.holderDetail}>
                <div><input value={month} onChange={monthHandler} maxLength={2} className='form-control' placeholder="MONTH" /></div>
                <div><input value={year} onChange={yearHandler} maxLength={2} minLength={2} className='form-control' placeholder="YEAR" /></div>
                <div><input maxLength={3} value={cvc} className='form-control' onChange={cvcValue} placeholder="CVC" onFocus={cvcHandler} onBlur={cvcRemove} /></div>
                
            </div>
            <div><button className='btn btn-dark'>Submit</button></div>
        </div>
    )
}
export default PaymentForm;