
import React, { useEffect, useState } from "react";
import * as util from '../util/util.js';


const SET_TIMER = {
    tiempo: 0,
    activo: false,
    status: 0,
}

export const useTimer = () => {

    const [timer, setTimer] = useState({
        tiempo: 0,
        activo: false,
        status: 0,
    });

    useEffect(() => {
        let intervalo;

        if (timer.activo && timer.tiempo !=0) {
            intervalo = setInterval(() => {
                setTimer({tiempo:tiempo-1});
            }, 1000);
        } else {
            clearInterval(intervalo);
        }
        return () => {
            clearInterval(intervalo)
        };
    }, [timer.activo]);


    const iniciarTimer = () => {
        util.playSound();
        setTimer({ ...timer, activo: true, status: 1 });
    };

    const detenerTimer = () => {
        util.playSound();
        setTimer({ ...timer, activo: false, status: 2 });
    };

    const reiniciarTimer = () => {
        util.playSound();
        setTimer(SET_TIMER);
    };

    const resumeTimer = () => {
        util.playSound();
        iniciarTimer();
    }
    const updateTimer = (tiempo) =>{
        setTimer({...timer, tiempo:tiempo});
    }

    return {
        timer, iniciarTimer,
        detenerTimer, reiniciarTimer,
        resumeTimer, updateTimer
    };
};