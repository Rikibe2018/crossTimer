import React, { useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';


const AnimatedButton = (props) => {

    const scale = useSharedValue(0);

    const reanimatedStyleButtonStart = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    }, []);

    const handlePress = () => {
        // console.log('entro en borones');
        scale.value = withTiming(0);

    }
    useEffect(() => {
        // console.log('Entro useeffect', props.funcion);
        scale.value = withTiming(1);
    }, []);

    return (
        <Animated.View style={reanimatedStyleButtonStart}>
            <TouchableOpacity style={styles.button} onPress={props.funcion}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {props.nameButton}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

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

export default AnimatedButton;
