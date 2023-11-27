import {useState, useRef, useMemo, useEffect} from 'react';
import ResultModal from "./ResultModal";

export default function TimerChalenge({title, targetTime}){
    const [timerRemaining, setTimerRemaining] = useState(targetTime*1000);
    const dialog = useRef();
    const timer = useRef();
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime*1000;

    const MemoizedResultModal = useMemo(() => <ResultModal ref={dialog} timerRemaining={timerRemaining} targetTime={targetTime} handleClose={handleClose}/>, [targetTime, timerRemaining]);
    function handleStart(){
        timer.current = setInterval(() =>{
            setTimerRemaining(prevTimerRemaining => prevTimerRemaining - 10);

        }, 10);
    }

    useEffect(() => {
        if (timerRemaining <= 0) {
            clearInterval(timer.current);
            dialog.current.openDialog();

        }
    }, [timerRemaining]);


    function handleStop(){
        dialog.current.openDialog();
        clearInterval(timer.current);
    }

    function handleClose(){
        setTimerRemaining(targetTime * 1000);
    }
    return (
        <>
            {MemoizedResultModal}
        <section className="challenge">
            <h2>
                {title}
            </h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop timer' :'Start Challenge'}
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer in'}
            </p>
        </section>
            </>
    )
}