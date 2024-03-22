import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const Tabata = () =>{
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
            Tabata
        </Text>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    baseText: {
      fontWeight: 'bold',
      fontSize:20,
    },
    
  });

export default Tabata;
