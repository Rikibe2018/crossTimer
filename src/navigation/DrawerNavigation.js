import { React } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Amrap from "../screens/Amrap";
import Tabata from "../screens/Tabata";
import Crono from "../screens/Crono";
import Timer from "../screens/Timer";
import OtmEmon from "../screens/Otm-Emon";
import CustomDrawer from "./CustomDrawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{headerShown:true,
                        headerStyle:{
                            backgroundColor:'#A2D9CE',
                        },
                        drawerActiveBackgroundColor: '#A2D9CE',
                        drawerActiveTintColor:'#fff',
                        drawerLabelStyle:{
                            marginLeft:-15,
                            fontSize:15,
                            color:'black',
                            fontWeight:'bold'},
                        /*width:Dimensions.get('window').width/1.55*/ }}>
            <Drawer.Screen name="Amrap" component={Amrap} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-start" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Tabata" component={Tabata} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-fast" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Cronometro" component={Crono} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-in" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Timer" component={Timer} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-time-nine-outline" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="OtmEmon" component={OtmEmon} options={{
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-start" size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;