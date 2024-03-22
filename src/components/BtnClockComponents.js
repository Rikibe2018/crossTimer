import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSharedValue} from 'react-native-reanimated';

import AnimatedButton from './Botones.js';


function BtnClock(props) {
    const progress = useSharedValue(1);
    const scale = useSharedValue(0);
    const [isActive, setIsActive] = useState(false);
    const scaleStatus1 = useSharedValue(0);
    const translateXSatatus1 = useSharedValue(0);

    const onPress = () => {
        //scale.value = withTiming(0, { duration: 500 });
        setIsActive(!isActive);
    };

    return (
        <View style={{ alignItems: 'center' }}>
            {(props.status === 0) ?
                <AnimatedButton nameButton='Start' funcion={props.start}></AnimatedButton> : ""
            }
            {(props.status === 1) ?
                <View style={{ flexDirection: 'row' }}>
                    <AnimatedButton funcion={props.stop} nameButton='Stop'></AnimatedButton>
                    <AnimatedButton funcion={props.reset} nameButton='Reset'></AnimatedButton>

                </View> : ''
            }
            {(props.status === 2) ?
                <View style={{ flexDirection: 'row' }}>

                    <AnimatedButton funcion={props.resume} nameButton='Resume'></AnimatedButton>
                    <AnimatedButton funcion={props.reset} nameButton='Reset'></AnimatedButton>

                </View> : ""
            }
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        width: 90,
        alignItems: 'center',
        backgroundColor: '#333333',
        padding: 15,
        margin: 10,
        borderRadius: 40,
    },
});

export default BtnClock;
