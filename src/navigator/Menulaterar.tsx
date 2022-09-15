import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Configuraciones from '../screens/Configuraciones';
import Login from '../screens/Login';
import { BottonTabNav } from './BottonTabNav';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../../styles/Styles';
import { useContext } from 'react';
import { BitinUserContext } from '../context/bitinContext/BitinUserContext';
import Registro from '../screens/Registro';






export type menuLateraltStackParam = {
    Login: undefined;
    BottonTabNav: undefined;
    Configuraciones: undefined;
    Registro: undefined;
  }
  const Drawer = createDrawerNavigator<menuLateraltStackParam>();

export const Menulaterar = () => {
  

    return (
        <Drawer.Navigator initialRouteName="Login" 
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="BottonTabNav"  options={{ headerShown: false, title: "Home" }} component={BottonTabNav} />
            <Drawer.Screen name="Configuraciones" component={Configuraciones} />
            <Drawer.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Drawer.Screen name="Registro" options={{  }} component={Registro} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    const{BitinContext,signOutContext}=useContext(BitinUserContext)
    return (
       
        <DrawerContentScrollView>
            {/* avatar img */}
            <View
                style={styles.avatarContainer}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" }}
                    style={styles.avatar} />
                {BitinContext.isLogin?<Text>{BitinContext.userName} </Text> :<Text>
                    Nombre usuario + apellidos
                </Text>}
                <View></View>
                {BitinContext.isLogin?<Text>{BitinContext.email} </Text>:<Text>
                    Correo
                </Text>}

            </View>
            {/* Opciones del menu */}
            <View style={styles.menuContainer}>
                {BitinContext.isLogin&&<TouchableOpacity
                    style={styles.menuBottonContainer}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.textMenuContainer}>
                        Home
                    </Text>
                </TouchableOpacity>}
                <TouchableOpacity
                    style={styles.menuBottonContainer}
                    onPress={() => navigation.navigate("Configuraciones")}
                >
                    <Text style={styles.textMenuContainer}>
                        Configuraciones
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBottonContainer}
                    onPress={() => {
                        navigation.jumpTo('Login');
                        signOutContext();
                    }}
                >
                    <Text style={styles.textMenuContainer} >
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    )
}