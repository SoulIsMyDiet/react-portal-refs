import {useState, useRef} from 'react';
import ResultModal from "./ResultModal";
export default function TimerChalenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    let dialog = useRef();
    let timer = useRef();
    function handleStart(){
        timer.current = setTimeout(() =>{
            setTimerExpired(true);
            dialog.current.openDialog();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
    return (
        <>
            <ResultModal ref={dialog} result={timerExpired ? 'lost' : 'win'} targetTime={targetTime}/>
        <section className="challenge">
            <h2>
                {title}
            </h2>
            {/*{timerExpired && <p>You lost</p>}*/}
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
            </>
    )
}