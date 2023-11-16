import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stopwatch(props) {

    const [minutes, setMinutes] = useState(sessionStorage.getItem("minutes") ?? 0);
    const [seconds, setSeconds] = useState(sessionStorage.getItem("seconds") ?? 0);
    const [minutess, setMinutess] = useState(sessionStorage.getItem("minutes") ?? 0);
    const [secondss, setSecondss] = useState(sessionStorage.getItem("seconds") ?? 0);
    const [flag, setFlag] = useState(false);
    const [countUpMinutes, setCountUpMinutes] = useState(0);
    const [countUpSeconds, setCountUpSeconds] = useState(0);



    const handleChange = (e) => {
        setMinutes(e.target.value);
        setMinutess(e.target.value);
        console.log(minutess)
    }


    const handlesecond = (e) => {
        setSeconds(e.target.value)
        setSecondss(e.target.value)
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



  


   
        useEffect(() => {
            if (flag) {
                const interval = setInterval(() => {
                    if (countUpMinutes == parseInt(minutess) && countUpSeconds == parseInt(secondss)) {
                        console.log("matched");
                        setFlag(false)
                        toast.error("TIME UP!");

                    }
                    else if (countUpSeconds === 60) {
                        setCountUpMinutes(countUpMinutes + 1);
                        setCountUpSeconds(0);
                    }
                    else {
                        setCountUpSeconds(countUpSeconds + 1);
                    }

                }, 1200);

                return () => {
                    clearInterval(interval);
                }
            }

        }, [countUpMinutes, countUpSeconds, flag])









    const startt = () => {
        setFlag(true)
    };


    const stop = () => {
        setFlag(false);
        sessionStorage.setItem("minutes", minutes);
        sessionStorage.setItem("seconds", seconds);
    };


    const reset = () => {
        setFlag(false)
        setCountUpMinutes(0)
        setCountUpSeconds(0)
        sessionStorage.removeItem("minutes", minutes);
        sessionStorage.removeItem("seconds", seconds);
    }



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

                    <div className='text-center'>
                        <button type="button" className="btn btn-warning m-2 text-white" >Count Up</button>
                        <button type="button" className="btn btn-warning m-2 text-white" >Count Down</button>
                    </div>



                    <p className='cs-form3 text-center fw-bold'>{parseInt(countUpMinutes) < 10 ? "0" + countUpMinutes : countUpMinutes}:{parseInt(countUpSeconds) < 10 ? "0" + countUpSeconds : countUpSeconds}</p>

                    {/* <p className='cs-form3 text-center fw-bold'>{parseInt(minutes) < 10 ? "0" + minutes : minutes}:{parseInt(seconds) < 10 ? "0" + seconds : seconds}</p> */}



                    <ToastContainer
                        position='top-center'
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />


                    <div className='text-center mt-5'>

                        {
                            flag ?
                                <button type="button" className="btn btn-danger  text-white" onClick={stop}>Pause</button>
                                :
                                <button type="button" className="btn btn-success  text-white" onClick={startt}>play</button>
                        }


                        <button type="button" className="btn btn-primary m-2 text-white" onClick={reset}>Reset</button>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Stopwatch;