import React, { useEffect, useState } from 'react';

function Clock(props) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds == 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }

        },1000)
        return ()=> clearInterval(timer)
    })

    const handleChange = (e) => {
        setMinutes(e.target.value);
    }

    const handlesecond = (e) => {
        setSeconds(e.target.value)
    }
    const startt = ()=>{
        setMinutes(0)
        setSeconds(0)
    }

    const stopp = ()=>{
        clearInterval(timer)
    }

    return (
        <div>
            <div className='container'>


                
            <div className='cs-form mt-3'>
                        <p className='cs-form1'>Set Your Timer in</p>
                        <input type='text' onChange={handleChange}  className='cs-form4' name='minute' />
                        <p className='cs-form1'>Minute &</p>
                    </div>

                    <div className='cs-form '>
                        <input type='text' onChange={handlesecond}  className='cs-form4' name='second' />
                        <p className='cs-form1'>second</p>
                    </div>

                    
             <h1 className='text-center mt-3'>{minutes}:{seconds}</h1>
             <div className='text-center mt-5'>
             <button type="button" className="btn btn-success" onClick={startt}>Restart</button>
             <button type="button" className="btn btn-danger  text-white" onClick={stopp}>Stop</button>
             </div>
             
             



            </div>

        </div>
    );
}

export default Clock;