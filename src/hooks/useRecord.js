/* eslint-disable indent */
import { useEffect, useState } from 'react';

export const useRecord = () => {
    const [current, setCurrent] = useState(0);
    const [colorHistory, addToHistory] = useState(['#ffffff']);

    useEffect(() => {
        // console.log('current index - useEffect', current);
        // console.log('current history array - useEffect', colorHistory);
    }, [current]);

    const undo = () => {
        setCurrent((prev) => prev - 1);
    };

    const redo = () => {
        setCurrent((prev) => prev + 1);
    };

    const record = (clr) => {
        if (colorHistory.length === current + 1) {
            addToHistory((prev) => [...prev, clr]);
            setCurrent((prev) => prev + 1);
        }
        else {
            addToHistory((prevArr) =>
                // prevArr.splice(current + 1, 0, clr));
                [...prevArr.slice(0, current + 1), // ...before
                    clr,
                ...prevArr.slice(current + 1)]); // ...after
            setCurrent((prev) => prev + 1);
        }
    };

    return { current, undo, redo, record, colorHistory };
};
