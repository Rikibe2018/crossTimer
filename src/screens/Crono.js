import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useRef } from "react";
import { Audio } from "expo-av";
import BtnClock from "../components/BtnClockComponents";
import FloatingBtn from "../components/FloatingButton";


const Crono = () => {

  const tiempos = [
    /* { lap: '10:00' },
    { lap: '120:00' },
    { lap: '103:00' },
    { lap: '104:00' },
    { lap: '105:00' },
    { lap: '106:00' },
    { lap: '107:00' },
    { lap: '108:00' },
    { lap: '107:00' },
    { lap: '170:00' },
    { lap: '180:00' },
    { lap: '190:00' },
    { lap: '20:00' },
 */
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ];

  const [crossTime, setCrossTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  const [lapTimes, setLapTimes] = useState([]);

  var updatedMs = crossTime.ms, updatedS = crossTime.s, updatedM = crossTime.m;

  //MOCKSSSS
  const startMock = () => {
    console.log('Start Mock');
    setStatus(1);

  }
  const stopMock = () => {
    console.log('Stop Mock');
    setStatus(2);
  }

  const resetMock = () => {
    console.log('Reset Mock');
    setStatus(0);
  }

  const resumeMock = () => {
    console.log('Resume Mock');
    //setStatus(0);
    startMock();
  }

  ////// FIN MOCK

  useEffect(() => {
    let interval = null;
    if (status === 1) {
      interval = setInterval(() => {
        runClock();
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status, crossTime]);

  const startClock = () => {
    //  runClock();
    playSound();
    setStatus(1);
    // setInterv(setInterval(runClock, 9));
  }

  const stopClock = () => {
    playSound();
    clearInterval(interv);
    setStatus(2);
  }

  const resetClock = () => {
    playSound();
    clearInterval(interv);
    setStatus(0);
    setCrossTime({ ms: 0, s: 0, m: 0 });
  }

  const resumeClock = () => {
    playSound();
    startClock();
  }

  const runClock = () => {
    updatedMs = updatedMs + 10;

    if (updatedM === 60) {
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    //    updatedMs=updatedMs+10;
    setCrossTime({ ms: updatedMs, s: updatedS, m: updatedM });

  };


  function displayTime(centiseconds) {
    let minutes = 0;
    let seconds = 0;
    if (centiseconds < 0) {
      centiseconds = 0;
    }
    if (centiseconds < 100) {
      return `00:00:${padToTwo(centiseconds)}`;
    }
    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;
    if (seconds < 60) {
      return `00:${padToTwo(seconds)}:${padToTwo(remainCentiseconds)}`;
    }
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(remainCentiseconds)}`;
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/click.mp3'))
    await sound.playAsync();

  }

  function onPressButtonFloating() {
    //console.log('Floating Button ', crossTime);
    var lapTime=0;
    lapTime = (crossTime.m * 60) + (crossTime.s) + (crossTime.ms / 100);
    console.log(displayTime(lapTime));
    lapTimes.push(lapTime);
    console.log(lapTimes);
    console.log('LAtTIMESSS ',displayTime(lapTime));
    
    setLapTimes(lapTimes.concat(lapTime));
    console.log(lapTimes.length);
  }

  return (

    <View style={styles.container}>

      {/* <Text style={styles.baseText}>Cronometro</Text> */}

      <View style={styles.continerTime}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', }}>
          <Text style={styles.timeText}>{((crossTime.m) >= 10 ? crossTime.m : "0" + crossTime.m)}:
            {((crossTime.s) >= 10 ? crossTime.s : "0" + crossTime.s)}</Text>
          <Text style={styles.timeMiliText}>.{((crossTime.ms) >= 10 ? crossTime.ms : "0" + crossTime.ms)}</Text>
        </View>

      </View>


      <BtnClock status={status} start={startClock} stop={stopClock} reset={resetClock} resume={resumeClock} />
      {/* <BtnClock status={status}  start={startMock} stop={stopMock} reset={resetMock} resume={resumeMock} /> */}

      {/*  (lapTimes != null) ? */}
      {(lapTimes.length !== 0) ?
        <View style={styles.containerFlat}>
          <FlatList
            data={lapTimes}
            renderItem={({ item, index }) => {
              return (
                <Text>Lap: {index + 1} - {item}</Text>
              );
            }}
          />
        </View> : ''
      }

      {/*  <TouchableOpacity
        style={styles.floatinButton}
        onPress={onPressButtonFloating}
      >
        <Ionicons name='add-circle' size={65} color='red' />
      </TouchableOpacity>
      */}
      <FloatingBtn onPressButtonFloating={onPressButtonFloating}></FloatingBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#A2D9CE',
    // borderWidth:4,
    // borderColor:'red',


  },
  /*  containerButtonFlating:{
     flex: 0.2,
     backgroundColor: '#F2F2F2',
   }, */

  /* floatinButton: {
    position:  'absolute',
    bottom: 40,
    right: 10,
    
  }, */

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  continerTime: {
    flex: 0.3,
    margin: 25,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 35,

  },
  containerFlat: {
    flex: 0.3,
    margin: 25,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 35,

  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timeMiliText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }


});


export default Crono
