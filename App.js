import 'react-native-gesture-handler';

import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './src/navigation/DrawerNavigation';

///asassa

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

const Drawer = createDrawerNavigator();


export default function App() {
  //const [isWorking, setIsWorking] = useState(false);
  //const [time, setTime] = useState(25 * 60);
  //const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  
  /* const {height, width} = Dimensions.get('window');
  console.log('Height', height);
  console.log('Width', width);
 */

  return (
    <NavigationContainer>
        <DrawerNavigation />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  }
});
