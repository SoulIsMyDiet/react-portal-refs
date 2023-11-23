import {useState, useRef} from 'react';
export default function TimerChalenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    let timer = useRef();
    function handleStart(){
        timer.current = setTimeout(() =>{
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
    return (
        <section className="challenge">
            <h2>
                {title}
            </h2>
            {timerExpired && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop timer' :'Start Challenge'}
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Timer in'}
            </p>
        </section>
    )
}