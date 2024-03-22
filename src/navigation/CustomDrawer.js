import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import LogoGora from "../../assets/gim.png";

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}
              contentContainerStyle={{ backgroundColor: '#A2D9CE' }}>
                {/* <View style={styles.containerImagen}> */}
                <Image source={LogoGora}
                        style={styles.imagen} />
                <Text style={styles.TextImagen}>Gora Fitness</Text>
                {/* </View> */}
                <View style={{ flex:1, backgroundColor:'#FFF', paddingTop:10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
           {/*  <View>
                <Text> Fin Lista fddd </Text>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* alignItems:'center',
        justifyContent:'center', */
    },
    containerImagen: {
        paddingTop: 50,
        backgroundColor: '#A2D9CE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        height: 80,
        width: 80,
        marginLeft:20,
        marginTop:20,
        borderRadius: 40,
    },

    TextImagen: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
    },

});

export default CustomDrawer
