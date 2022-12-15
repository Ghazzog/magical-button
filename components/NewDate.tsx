import React,{useState, useEffect} from "react";
import Confetti from 'react-confetti'

export default function NewDate() {

    const current = new Date();
    const [displayedDate, setDisplayedDate] = useState(current)
    const [visible,setVisible] = useState(false)
    console.log(current.getDate(), current.getFullYear(), current.getHours()+ 5, current.getMinutes())

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDisplayedDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
    function handleClick() {
        setDisplayedDate(new Date('Feb 1, 2023 09:00:00'))
        setVisible(true)
    }
    return (
        <div>
            {visible? <Confetti /> : null}
            <h1>
            {displayedDate.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </h1>
            <h1>
             {displayedDate.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </h1>
            {visible? null : <h3>Press the button below and see where it takes you!</h3>}
            {visible? null : <button onClick={handleClick}>Press Me</button>}

        </div>

    )
}