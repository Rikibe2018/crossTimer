import { View, Text, StyleSheet, Button, Modal, TouchableOpacity, Pressable, TextInput } from 'react-native';
import React, { useState } from "react";
import * as util from '../util/util.js';
import BtnClock from "../components/BtnClockComponents";
import FloatingBtn from "../components/FloatingButton";
//import DateTimePicker from '@react-native-community/datetimepicker';

import { timer, useTimer } from '../hooks/TimerHook.js';




function RelojTimer() {

    const { timer, iniciarTimer, detenerTimer, reiniciarTimer, resumeTimer, updateTimer } = useTimer();
    const [modalVisible, setModalVisible] = useState(false);
    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');

    const handleConfirm = () => {
        // Puedes hacer algo con la hora y los minutos seleccionados aquí
        setModalVisible(true);

    };
    const handleConfirmModal = () => {
        // Puedes hacer algo con la hora y los minutos seleccionados aquí
        setModalVisible(false);
        let timerTotal=0;
        timerTotal=(parseInt(hora)*60)+parseInt(minutos);
        updateTimer(timerTotal);
    
    };

    const handlerCambioHora=(nuevaHora)=>{
        if (nuevaHora>24){
            setHora('')
        }else{
            setHora(nuevaHora)
        }
        console.log(nuevaHora);
    };
    const handlerCambioMinutos=(nuevoMinutos)=>{
        if (nuevoMinutos>60){
            setMinutos('')
        }else{
            setMinutos(nuevoMinutos)
        }
    };


    return (
        <View style={styles.container}>

            <View style={styles.continerTime}>

                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', }}>
                    <Text style={styles.timeText}>{util.convertirTiempoTimer(timer.tiempo)}</Text>
                </View>
            </View>
            <BtnClock status={timer.status} start={iniciarTimer} stop={detenerTimer}
                reset={reiniciarTimer} resume={resumeTimer} />

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                //onShow={() => { console.log('se mostro el modal') }}
                //onDismiss={() => { console.log('se fue el modal') }}
                //onRequestClose={() => {
                //    Alert.alert('Modal Cerrado');
                //    console.log('Salio del Modal')
                //}}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalView}>
                        <Text>Seleccione Hora y/o Minutos</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding:10 }}>
                            <View>

                                <TextInput style={styles.horaInput}
                                    value={hora}
                                    inputMode='numeric'
                                    autoFocus={true}
                                    maxLength={2}
                                    onChangeText={handlerCambioHora}
                                >
                                </TextInput>
                                <Text style={{paddingLeft:5}}>Horas</Text>

                            </View>
                            <Text style={{ padding:5,fontSize: 45, alignItems: 'baseline' }}>:</Text>
                            <View>

                                <TextInput style={styles.horaInput}
                                    value={minutos}
                                    inputMode='numeric'
                                    maxLength={2}
                                    onChangeText={handlerCambioMinutos}

                                >
                                </TextInput>
                                <Text style={{paddingLeft:5}}>Minutos</Text>
                            </View>
                        </View>
                        
                        <Pressable style={[styles.button, styles.buttonClose]}
                            onPress={handleConfirmModal}>
                            <Text style={styles.textStyle}>
                                Cerrar Modal
                            </Text>

                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Button title="Select a date" onPress={handleConfirm} />

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
        bottom: 30,
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
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196f3',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horaInput: {
        fontWeight: 'bold',
        fontSize: 35,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        padding: 15,
        //marginLeft: 10,


    }
});



export default RelojTimer;




export const App = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
};