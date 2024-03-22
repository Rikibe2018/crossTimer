
import React, { useEffect, useState } from "react";
import * as util from '../util/util.js';

var miTiempo = 0;
var miTiempoNuevo = 0;
const SET_CRONOMETRO = {
    tiempo: 0,
    activo: false,
    status: 0,
    lapso: false,
}

export const useCrono = () => {

    const [crono, setCrono] = useState({
        tiempo: 0,
        activo: false,
        status: 0,
        lapso: false,

    });

    const [intervalos, setIntervalos] = useState([]);

    useEffect(() => {
        let intervalo;

        if (crono.activo) {
            intervalo = setInterval(() => {
                miTiempo = miTiempo + 0.1;
                miTiempoNuevo = miTiempoNuevo + 0.1;
                setCrono({
                    ...crono, tiempo: miTiempo,
                });
            }, 100);
        } else {
            clearInterval(intervalo);
        }
        return () => {
            clearInterval(intervalo)
        };
    }, [crono.activo]);



    const convertirLapsos = (tiempo) => {
        let minutos = Math.floor(tiempo / 60);
        let segundos = Math.floor(tiempo % 60);
        let decimas = ((tiempo % 1) * 10).toFixed(1);
        if (decimas > 5) {
            segundos++
        }
        return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    };

    const iniciarCronometro = () => {
        util.playSound();
        setCrono({ ...crono, activo: true, status: 1 });
    };

    const detenerCronometro = () => {
        util.playSound();
        setCrono({ ...crono, activo: false, status: 2 });
    };

    const reiniciarCronometro = () => {
        util.playSound();
        setIntervalos([]);
        setCrono(SET_CRONOMETRO);
        miTiempo = 0;
        miTiempoNuevo = 0;
    };

    const resumeCronometro = () => {
        util.playSound();
        iniciarCronometro();
    }

    const tomarLap = () => {
        setIntervalos([{
            tiempo1: convertirLapsos(miTiempoNuevo), tiempo2
                : convertirLapsos(miTiempo)
        }, ...intervalos]);
        miTiempoNuevo = 0;
    };

    return {
        crono, intervalos, iniciarCronometro,
        detenerCronometro, reiniciarCronometro,
        resumeCronometro, tomarLap
    };
};