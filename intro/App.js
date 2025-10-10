//Importanciones: Zona de declaraciones. Librerias y componentes extra, agregando cosas depende de las necesidades del screen??
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

//Main: La zona principal: Zona de componentes, una funcion que regresa compontentes

export default function App() {

  //Declaramos el estado en una varibale dentro de corchetes que le asignamos a useState. Tiene 2 esatados: Variable y función

  const[contador, setContador]=useState(0); // Desestructuración que sirve para desustructurar un estado que viene de useState para comenzar a usar el estado en base a sus deos elementos. Inicializamos con 0  Contador: contador uno es variable y otro componente. Se lo pasamos a traves de un ECO, osea dentro de llaves



  return (
    <View style={styles.container}>
      <Text>Contador: {contador} </Text> 
      <Button title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button title="Quitar" onPress={()=>setContador(contador-1)}/>
      <Button title="Reiniciar" onPress={()=>setContador(contador-contador)}/>

      <StatusBar style="auto" />
    </View>
  );
}
//Estilos: Zona de estetica de componentes y posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
