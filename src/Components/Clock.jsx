import React, { useEffect, useState } from 'react';
import './Clock.scss'

const Clock = () => {
    const [hours, setHours] = useState(null)
    const [minuts, setMinuts] = useState(null)
    const [sec, setSec] = useState(null)

    useEffect(() => {
        setInterval(() => {
            let dateInHours = new Date().getHours();
            let stringDateInHours = dateInHours.toString();
            let dateInMinuts = new Date().getMinutes();
            let stringDateInMinuts = dateInMinuts.toString();
            let dateInSec = new Date().getSeconds();
            let stringDateInSec = dateInSec.toString();

            setHours(stringDateInHours.padStart(2, '0'));
            setMinuts(stringDateInMinuts.padStart(2, '0'));
            setSec(stringDateInSec.padStart(2, '0'));
        }, 1000);
    }, [])

    const [color, setColor] = useState(null);
    /*const [date, setDate] = useState(0);
    setInterval(() => {
        let myDate = new Date().toLocaleTimeString();
        setDate(myDate);
    }, 1000);*/

    useEffect(() => {
        if (minuts !== null) {
            if (color === null) {
                setColor('cyan');
            } else if (color === 'cyan') {
                setColor('green');
            } else if (color === 'green') {
                setColor('yellow');
            } else if (color === 'yellow') {
                setColor('orange');
            } else {
                setColor('cyan');
            }
        }
    }, [minuts])


    return (
        <>
            <div className={`clockSection ${color}`}>
                <span> <b> {hours}:{minuts}:{sec}</b></span>
                {/* <span> <b>{date}</b> </span> */}
            </div >
        </>
    )
}

export default Clock;
