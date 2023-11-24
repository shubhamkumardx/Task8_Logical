import React, { useEffect, useState } from 'react';


function New_comp(props) {
    const [minutes, setMinutes] = useState(sessionStorage.getItem("minutes") ?? 0);
    const [seconds, setSeconds] = useState(sessionStorage.getItem("seconds") ?? 0);
    const [flag, setFlag] = useState(false);


    const handleChange = (e) => {
        setMinutes(e.target.value);
    }

    const handlesecond = (e) => {
        setSeconds(e.target.value)
    }


    useEffect(() => {
        if (flag) {
            const interval = setInterval(() => {
                if (parseInt(seconds) == 0 && parseInt(minutes) !== 0) {
                    setSeconds((seconds) => seconds + 59);
                    setMinutes((minutes) => minutes - 1);
                } else if (parseInt(seconds) == 0 && parseInt(minutes) == 0) {

                } else {
                    setSeconds((seconds) => seconds - 1);
                }
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [seconds, minutes, flag]);


    const startt = () => {
        setFlag(true)
    };

    const stop = () => {
        setFlag(false);
        sessionStorage.setItem("minutes", minutes);
        sessionStorage.setItem("seconds", seconds);
    };


    return (
        <div>
            <div className='container'>
                <p className='text-center cs2 mt-5 fw-bold'>The Timer Clock</p>
                <div className='cs1'>

                    <div className='cs-form mt-3'>
                        <p className='cs-form1'>Set Your Timer in</p>
                        <input type='text' onChange={handleChange} className='cs-form4' name='minute' />
                        <p className='cs-form1'>Minute &</p>
                    </div>

                    <div className='cs-form '>
                        <input type='text' onChange={handlesecond} className='cs-form4' name='second' />
                        <p className='cs-form1'>second</p>
                    </div>

                    {/* {
                        flag ?
                            <p className='cs-form3 text-center fw-bold'>{parseInt(minutes) < 10 ? "0" + minutes : minutes}:{parseInt(seconds) < 10 ? "0" + seconds : seconds}</p>
                            :
                            <p className='cs-form3 text-center fw-bold'>{parseInt(sessionStorage.getItem("minutes")) < 10 ? "0" + parseInt(sessionStorage.getItem("minutes")) : parseInt(sessionStorage.getItem("minutes"))}
                                :{parseInt(sessionStorage.getItem("seconds")) < 10 ? "0" + parseInt(sessionStorage.getItem("seconds")) : parseInt(sessionStorage.getItem("seconds"))}</p>
                    } */}


                    <p className='cs-form3 text-center fw-bold'>{parseInt(minutes) < 10 ? "0" + minutes : minutes}:{parseInt(seconds) < 10 ? "0" + seconds : seconds}</p>


                    <div className='text-center mt-5'>
                        {
                            flag ?
                                <button type="button" className="btn btn-danger  text-white" onClick={stop}>Stop</button>
                                :
                                <button type="button" className="btn btn-success" onClick={startt}>Start</button>
                        }
                    </div>

                </div>
            </div>

        </div>
    );
}

export default New_comp;    