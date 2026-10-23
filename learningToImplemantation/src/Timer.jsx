
import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {

    // use state hooks-
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = [
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(remainingSeconds).padStart(2, "0"),
    ].join(":");

    return (
        <div className="timer-container">
            <h1>Live Timer</h1>
            <p>Start the timer to competete with yourself.</p>
            <div className="timer-display">
                {formattedTime}
            </div>
            <div className="timer-controls">
                <button onClick={() => setIsRunning(true)}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button onClick={() => {
                    setIsRunning(false);

                }
                }
                    disabled={!isRunning}
                >
                    Pause
                </button>
                <button onClick={() => {
                    setIsRunning(false)
                    setSeconds(0);
                }}
                >
                    Reset
                </button>
            </div>
        </div>

    );
}
