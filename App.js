import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "./Screens/SettingScreen";
import DietScreen from "./Screens/DietScreen";
import HomeScreen from './Screens/HomeScreen';
import ProgressScreen from './Screens/ProgressScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route }) => ({
          headerShown:false,
          tabBarShowLabel:false,
          tabBarStyle:{
            height:73,
            position: 'absolute' 
          },
          tabBarIcon: ({ focused, size }) => {
            let iconName,tintColor,diet,graph,home,settings;

            if (route.name === 'Home') {
              tintColor=focused?"#44BDE8":'#9B9B9B';
              home=(<View style={focused?styles.items:{alignItems:"center"}}>
              <Image style={styles.tabIcon} tintColor={tintColor} source={require('./assets/flash.png')}/>
              <Text style={[styles.tabLable,{color:focused?"#44BDE8":'#9B9B9B'}]}>Home</Text>
              </View>
            );
              return home
              
            } else if (route.name === 'Settings') {
              tintColor=focused?"#44BDE8":'#9B9B9B';
              settings=(<View style={focused?styles.items:{alignItems:"center"}}><Image style={styles.tabIcon} tintColor={tintColor} source={require('./assets/settings.png')}/>
              <Text style={[styles.tabLable,{color:focused?"#44BDE8":'#9B9B9B'}]}>Settings</Text>
              </View>);
              return settings;
            }
            else if (route.name === 'Progress') {
              tintColor=focused?"#44BDE8":'#9B9B9B';
              graph=(<View style={focused?styles.items:{alignItems:"center"}}>
                <Image style={styles.tabIcon} tintColor={tintColor} source={require('./assets/arrow.png')}/>
              <View style={{flexDirection:"row"}}>
              <Image style={[styles.tabIcon,{top:7}]} tintColor={tintColor} source={require('./assets/1.png')}/>
              <Image style={[styles.tabIcon,{top:4}]} tintColor={tintColor} source={require('./assets/2.png')}/>
                <Image style={[styles.tabIcon,{top:0}]} tintColor={tintColor} source={require('./assets/3.png')}/>
              </View>
              <Text style={[styles.tabLable,{color:focused?"#44BDE8":'#9B9B9B'}]}>Progress</Text>
                
              </View>);
              return graph;
            }
            else if (route.name === 'Diet') {
              tintColor=focused?"#44BDE8":'#9B9B9B';
              diet=(<View style={focused?styles.items:{alignItems:"center"}}>
                <View style={{flexDirection:"row"}}>
                <Image style={styles.tabIcon} tintColor={tintColor} source={require('./assets/spoon.png')}/>
                <Image style={styles.tabIcon} tintColor={tintColor} source={require('./assets/fork.png')}/>
              </View>
              <Text style={[styles.tabLable,{color:focused?"#44BDE8":'#9B9B9B'}]}>Diet</Text>
              </View>);
              return diet;
            }
          },
          tabBarActiveTintColor: '#44BDE8',
          tabBarInactiveTintColor: '#9B9B9B',
        })}>
        <Tab.Screen  name="Home" component={HomeScreen} />
        <Tab.Screen name="Diet" component={DietScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5EAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLable:{
    color:"#9B9B9B"
  },
  items:{
    width:74,
    height:74,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 100,
            backgroundColor:"white",
            marginTop:-11,
            paddingVertical:20,
            marginVertical:20,
            shadowColor: "#44BDE8",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.27,
            shadowRadius:7,
            elevation: 5,
  }

});
