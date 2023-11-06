import React, { useEffect, useRef, useState } from 'react';
import { format, getTime } from 'date-fns'

function Clock(props) {

    const [minutess, setMinutess] = useState(null);
    const [second, setsecond] = useState(minutess);
    let id = useRef();

    const handleChange = (e) => {
        setMinutess(e.target.value);
    };

    const handeltime = () => {
        id.current = setInterval(() => {
            setsecond((prev) => prev - 1)
        }, 1000)
    }

    var min = minutess * 60 + second;
    const minutes = Math.floor(min / 60);
    console.log(minutes)
    const sec = min % 60
    console.log(sec);




    return (
        <div className='container'>
            <p className='text-center cs2 mt-5 fw-bold'>THE CLOCK</p>
            <div className='cs1'>
                <div className='cs-form mt-5'>
                    <p className='cs-form1'>Set Your Timer in Minute</p>
                    <input type='text' onChange={handleChange} className='cs-form4' />
                </div>
                {/* 
                <p className='cs-form3 text-center fw-bold'>{minutess * 60 + second}</p> */}

                <p className='cs-form3 text-center fw-bold'>{minutes}:{sec}</p>

                <div className='text-center mt-5'>
                    <button type="button" class="btn btn-success" onClick={() => handeltime()}>Start</button>
                    <button type="button" class="btn btn-danger m-2 text-white" onClick={() => clearInterval(id.current)}>Stop</button>
                </div>
            </div>






        </div>
    );
}

export default Clock;