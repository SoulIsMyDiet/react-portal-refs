import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal =  forwardRef(function ResultModal({result, targetTime}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            openDialog() {
                dialog.current.showModal();
            }
    };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>you {result}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with<strong>x</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;