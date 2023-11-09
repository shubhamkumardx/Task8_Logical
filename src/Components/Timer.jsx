import React, { useEffect, useRef, useState } from 'react';

function Timer(props) {
  const [input, setInput] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);


  const handleChange = (e) => {
    setInput(e.target.value);
    setMinutes(e.target.value);
  };

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
    setFlag(true);
  }

  const stop = () => {
    setFlag(false);
  }



  return (
    <div>
      <div className='container'>
        <p className='text-center cs2 mt-5 fw-bold'>THE CLOCK</p>
        <div className='cs1'>
          <div className='cs-form mt-5'>
            <p className='cs-form1'>Set Your Timer in Minute</p>
            <input type='text' onChange={handleChange} className='cs-form4'/>
          </div>


          <p className='cs-form3 text-center fw-bold'>{parseInt(minutes) < 10 ? "0" + minutes : minutes}:{parseInt(seconds) < 10 ? "0" + seconds : seconds}</p>

          <div className='text-center mt-5'>
            <button type="button" className="btn btn-success" onClick={startt}>Start</button>
            <button type="button" className="btn btn-danger m-2 text-white" onClick={stop}>Stop</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Timer;