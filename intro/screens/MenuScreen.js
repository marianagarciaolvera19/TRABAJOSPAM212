import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import TextScreen from './TextScreen';
import ImgBackSplashScreen from './ImgBackSplashScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListSectionListScreen from './FlatListSectionList';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheet';
import Repaso1 from './Repaso1';

export default function MenuScreen() {
    const [screen, setScreen]=useState('menu'); //Todos los estados deben tener dos cacracteristicas, variables y función. Quiero que al momento que cargue aparezca menú

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'switch':
            return <BotonesScreen/>
        case 'repasito':
            return <Repaso1/>
        case 'textinputalert':
            return <TextScreen/>
        case 'imagebackgroungsplash':
            return <ImgBackSplashScreen/>
        case 'scrollview':
            return <ScrollViewScreen/>
        case 'activityindicator':
            return <ActivityIndicatorScreen/>
        case 'flatlistsectionlist':
            return <FlatListSectionListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomsheet':
            return <BottomSheetScreen/>
        case 'menu':
            default: 
                return (
                    <View style={styles.menu}>
                        <Text style={styles.textoMenu}> Menú de practicas </Text>
                        <View style={styles.botonesMenu}>
                        <Button color='#ff009dff' onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('switch')} title='Pract: Botones Switch'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('repasito')} title='Repaso'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('textinputalert')} title='Pract: Text Input y Alert'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('imagebackgroungsplash')} title='Pract: ImageBackgroung y SplashScreen'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('scrollview')} title='Pract: ScrollView'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('activityindicator')} title='Pract: ActivityIndicator'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('flatlistsectionlist')} title='Pract: FlatList y Section List'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('modal')} title='Pract: Modal'/>
                        <Button color='#ff009dff' onPress={()=>setScreen('bottomsheet')} title='Pract: Bottom Sheet'/>
                        </View>    
                    </View>      
                )

    } //Itera el estado de la variable screen. Se tiene en cuenta por el momentos dos variables: si presionar contador o botón de botonesScreen, si se presiona en boton contador usamos un case.

}

const styles = StyleSheet.create({   
  menu:{
        flex: 1,
        backgroundColor: '#ffe8f3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoMenu: {
        color: '#a00088ff',
        fontSize:50,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },    

    botonesMenu: {
        marginTop: 15,
        flexDirection: '', 
        gap: 20, 
    },
});

