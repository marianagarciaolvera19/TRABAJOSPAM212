import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet, ImageBackground, Pressable, Animated  } from 'react-native';

export default function Repaso1() {

  const [nombre, setNombre] = useState('');
  const [Correoelectronico, setCorreoelectronico] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensaje2, setMensaje2] = useState('');



  const enviarDatos = () => {
    if (nombre.trim() === '' || Correoelectronico.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
      alert('Error: Por favor completa todos los campos');
      setMensaje('Faltan campos por llenar');
    } else {
            Alert.alert('¡Éxito!', 'Datos enviados correctamente');
            alert('¡Éxito! Datos enviados correctamente');
            setMensaje('Datos enviados correctamente');
        }
    };


 return ( 
    <ImageBackground 
    source={require("../assets/FOTO.jpeg")}
    style={styles.background}
    resizeMode="cover">
    
    <View style={styles.containergrad}> 
      <View style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={Correoelectronico}
        onChangeText={setCorreoelectronico}
      />

        <Text style={styles.mensaje2}>
        Acepto términos y condiciones
        {mensaje2}</Text>

      <Button title="Registrate" onPress={enviarDatos} />

    </View>  
    </View>
    </ImageBackground>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:30,
    gap:10
  },
  title:{
    fontSize:35,
    fontWeight:'bold'
  },
   containergrad:{
    width:'80%',
    padding:10,
    borderRadius:45,
    backgroundColor: '#ffffff6c'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#1d5b99ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#462d62c4',
    textAlign:'center'
  },
   background: {
    flex: 1, 
    width: "100%", 
    height: "100%", 
    justifyContent: "center",
    alignItems: "center",
  },
  mensaje2:{
    marginTop:20,
    fontSize:18,
    color:'#462d62c4',
    textAlign:'center'
  },
});