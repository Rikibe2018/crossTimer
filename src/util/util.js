import { Audio } from "expo-av";



export async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/click.mp3'))
    await sound.playAsync();
}

export const convertirTiempo = (tiempo) => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
    const decimas = ((tiempo % 1) * 10).toFixed(1);
    const decimas2 = decimas < 10 ? Math.round(decimas, 1) : 0;

    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}.${decimas2}`;
};

export const convertirTiempoTimer = (tiempo) => {
    //const hora = 0;
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
   /*  const decimas = ((tiempo % 1) * 10).toFixed(1);
    const decimas2 = decimas < 10 ? Math.round(decimas, 1) : 0; */

    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
};
