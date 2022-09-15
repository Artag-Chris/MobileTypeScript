import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TopCalendarNav } from './TopCalendarNav';
import { TopSintomasrNav } from './TopSintomasNav';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Agendar from '../screens/Agendar';
import VistaX from '../screens/VistaX';
import { styles } from '../../styles/Styles';
import { Text, View, TouchableOpacity } from 'react-native';


const Tab = createBottomTabNavigator();


export const BottonTabNav = () => {

const getRouteName =(route:any)=>{
 const routeName=getFocusedRouteNameFromRoute(route)
 console.log(route)
}


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { justifyContent:"space-evenly", alignItems: "center", backgroundColor: '#F400A2', position: "absolute", bottom: 20, left: 10, right: 10, borderRadius: 30, height: 60, ...styles.shadowBottomNav },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen name="hoy"
        options={{
          headerShown: false, tabBarIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
              <Ionicons name="share-social-outline" size={30} color="white" />
              <Text style={{ fontSize: 10, color: 'white' }}>Hoy</Text>
            </View>)
        }}
        component={StackNavigator}
      />
      <Tab.Screen name="Calendario"
      
        options={{
          title: '',
          headerBackground: () => (<View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",}}>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#F400A2",width:"100%",alignSelf:"center"}}>
              <Text style={{fontSize:20,color:"white", marginTop:30}}>Calendario de Registros</Text>
            </View>
          </View>),
          tabBarIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
              <Ionicons name="reader-outline" size={30} color="white" />
              <Text style={{ fontSize: 10, color: 'white' }}>Calendario</Text>
            </View>)
        }}
        component={TopCalendarNav}
      />
      <Tab.Screen name="Guardar"
        options={{
          tabBarStyle:{display:"none"},
          title: 'Agendar',
          tabBarIcon: () => (
              <View style={{borderRadius:50, top: -20, alignSelf: "center",...styles.shadowBottomNav}}>
                <Ionicons style={{ alignSelf: "center" }} name="add-circle" size={60} color="white" />
              </View>
            )
        }}
        component={Agendar}
      />
      <Tab.Screen name="Sintomas"
        options={{ 
          title: '',
          headerBackground: () => (<View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",}}>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#F400A2",width:"100%",alignSelf:"center"}}>
              <Text style={{fontSize:20,color:"white", marginTop:30}}>Calendario de Sintomas</Text>
            </View>
          </View>),
          tabBarIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
              <Ionicons name="thermometer-outline" size={30} color="white" />
              <Text style={{ fontSize: 10, color: 'white' }} >Sintomas</Text>
            </View>)
        }}
        component={TopSintomasrNav}
      />
      <Tab.Screen name="???"
        options={{ tabBarIcon: () => (<Ionicons name="bandage-outline" size={30} color="white" />) }}
        component={VistaX}
      />
    </Tab.Navigator>
  );
}