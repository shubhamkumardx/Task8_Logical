import React, { useEffect, useRef, useState } from 'react';

function Timer(props) {
    const [num, setNum] = useState(100);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();
    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
    
        return () => clearInterval(intervalRef.current);
      }, []);

    const handleClick = () => {
        if (!pause) {
          clearInterval(intervalRef.current);
        } else {
          intervalRef.current = setInterval(decreaseNum, 1000);
        }
        setPause((prev) => !prev);
      };

      const Runclick = () =>{


      }



    return (
        <div>
            <div className='container'>
                <div>
                    {num}
                </div>
                <button onClick={handleClick}>{pause ? "Start" : "Pause"}</button>

            </div>
        </div>
    );
}

export default Timer;