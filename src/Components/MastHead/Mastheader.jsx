import React, { useState } from 'react';
import img from '../../pictures/c-1.png';
import style from '../MastHead/App.module.css';
import { GoPersonAdd } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function Mastheader(props) {
    const [date, setDate] = useState(null);
    function openPopup(){
        let popp = document.getElementById('popup')
        popp.classList.add(style.openpopup)
    }


  const [value, onChange] = useState(null);


    return (
        <div>
            <div className={style.header}>

                <img src={img} alt="" className={style.image} />

                <div className={style.content}>
                    <p className={style.cont}>A CAPRI BY SEA ISLAND TOUR</p>
                </div>

                <div className={style.imagebottom}>
                </div>

                <div className={style.bottom}>
                    <p className={style.bottomtext}>CHECK AVAILABILITY</p>
                </div>


                <div className={style.calendertext}>
                    <div className={style.calender}>
                        <div>
                            <div  onClick={openPopup} className={style.modal}>
                                <div className={style.inputlabel}>
                                    <IoCalendarOutline className={style.icon2} />
                                    <p className={style.text2}>07 Jul 2023</p>
                                 
                                </div>
                                <p className={style.text3}>Friday</p>
                            </div>

                             <div className={style.popup} id='popup'>
                             {/* <input type="date" className={style.calenderinput2} /> */}
                             {/* <DatePicker selected={date} onChange={(date) => setDate(date)} className={style.datecalender}/> */}
                             <Calendar onChange={onChange} value={value} />
                             </div>
                            
                        </div>

                        <div className={style.line}></div>

                        <div onClick={openPopup}>
                            <label htmlFor="">
                                <div>
                                    <div className={style.inputlabel}>
                                        <IoCalendarOutline className={style.icon2} />
                                        <p className={style.text2}>08 Jul 2023</p>
                                    </div>
                                    <p className={style.text4}>Saturday</p>
                                </div>
                                   
                                   <div className={style.popup} id='popup'>
                                   <input type="date " className={style.calenderinput} />
                                   </div>
                                
                            </label>
                        </div>

                    </div>

                


                    <div className={style.bottom2}>
                        <div className={style.dropdown}>
                            <button className={style.dropbtn}> <span><GoPersonAdd className={style.icons} /></span> 2 adults</button>
                            <div className={style.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Mastheader;