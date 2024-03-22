import React from "react";
import {View, Text,StyleSheet} from 'react-native';

const Amrap = () =>{
    return (
        <View style={styles.container}>
          <Text style={styles.baseText}>
              Amrap
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

export default Amrap
