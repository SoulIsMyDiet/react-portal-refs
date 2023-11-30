import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';

const ResultModal =  forwardRef(function ResultModal({timerRemaining, targetTime, handleClose}, ref){
    const dialog = useRef();
    const userLost = timerRemaining <= 0;
    const formattedRemainingTime = (timerRemaining/1000).toFixed(2);
    const score = Math.round((1-timerRemaining/(targetTime*1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialog.current.showModal();
            }
    };
    });
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={handleClose}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score is {score}</h2>}
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with<strong> {formattedRemainingTime} </strong>seconds left
            </p>
            <form method="dialog">
                <button onClick={handleClose}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});
export default ResultModal;