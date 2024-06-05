import React, { useState, useEffect } from 'react';

export function Timer() {
    const [minits, setMinits] = useState(5);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (minits === 0 && seconds === 0) {
            return;
        }
        const interval = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                setMinits(minits - 1);
                setSeconds(59);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <div>
            <h3>
                Тестирование {'0' + minits} :{' '}
                {seconds < 10 ? '0' + seconds : seconds}
            </h3>
        </div>
    );
}
