import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function FloatingBtn(props) {

    return (
        <View style={styles.floatingBtn}>
            <TouchableOpacity  onPress={props.onPressButtonFloating}>

                <Ionicons name='add-circle' size={65} color='gray' />

            </TouchableOpacity>

        </View>

    )



}

const styles = StyleSheet.create({
    floatingBtn: {
        // width: 50,
        // height: 50,
        borderRadius: 40,
        position: 'absolute',
        bottom: 40,
        right: 10,
    },
});

export default FloatingBtn;
