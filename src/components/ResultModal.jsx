import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal =  forwardRef(function ResultModal({timerRemaining, targetTime, handleClose}, ref){
    const dialog = useRef();
    const userLost = timerRemaining <= 0;
    const formattedRemainingTime = (timerRemaining/1000).toFixed(2);
    useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialog.current.showModal();
            }
    };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>you lost</h2>}
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with<strong> {formattedRemainingTime} </strong>seconds left
            </p>
            <form method="dialog">
                <button onClick={handleClose}>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;