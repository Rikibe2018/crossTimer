import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from "react";
import * as util from '../util/util.js';
import BtnClock from "../components/BtnClockComponents";
import FloatingBtn from "../components/FloatingButton";
import { useCrono } from '../hooks/CronoHook.js'


function RelojCrono() {

  const { crono, intervalos, iniciarCronometro, reiniciarCronometro, resumeCronometro,
    detenerCronometro, tomarLap, } = useCrono();

  return (
    <View style={styles.container}>

      <View style={styles.continerTime}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', }}>
          <Text style={styles.timeText}>{util.convertirTiempo(crono.tiempo)}</Text>
        </View>
      </View>
      <BtnClock status={crono.status} start={iniciarCronometro} stop={detenerCronometro}
        reset={reiniciarCronometro} resume={resumeCronometro} />
      <View style={styles.containerFlat}>

        <ScrollView >
          {intervalos.length != 0 &&
            <View>
              {
                intervalos.map((lap, index) => (
                  <View key={index} style={styles.item}>
                    <Text style={styles.textFlatList}>Lap-{lap.tiempo1} - {lap.tiempo2}</Text>
                  </View>
                ))
              }
            </View>
          }
        </ScrollView>

      </View>
      {
        crono.status === 1 &&
        <View style={styles.containerFloatBtn}>
          <FloatingBtn onPressButtonFloating={tomarLap}></FloatingBtn>
        </View>
      }
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#A2D9CE',

  },

  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  continerTime: {
    flex: 0.3,
    margin: 20,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 35,

  },
  containerFlat: {
    flex: 0.5,
    margin: 20,
    justifyContent: 'center',
    // backgroundColor: '#F2F2F2',
    padding: 2,
    // borderRadius: 35,

  },

  timeMiliText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerFloatBtn: {
    //backgroundColor:'red',
    flex: 1,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    right: 0,
    left: 0,
  },
  textFlatList: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#A2D9CE',
    padding: 2,
    marginTop: 2,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: '#777',
    shadowOffset: { width: 10, height: 40 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default RelojCrono;