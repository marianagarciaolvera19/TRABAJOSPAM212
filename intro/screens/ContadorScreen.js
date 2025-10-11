
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
      <Text style={styles.texto}> Contador: </Text> 
      <Text style={styles.texto2}> {contador} </Text>   
      <View style={styles.contenedorBotones}>
      <Button color="purple" title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button title="Quitar" onPress={()=>setContador(contador-1)}/>
      <Button color="pink"title="Reiniciar" onPress={()=>setContador(contador-contador)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//Estilos: Zona de estetica de componentes y posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd90ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#56094bff',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through'//tachado
  },

  texto2:{
    color: '#e346aaff',
    fontSize:40,
    fontFamily: 'Courier',
    fontWeight: '400',
    textDecorationLine: 'underline'
  },

    contenedorBotones:{
      marginTop: 15,
      flexDirection: 'row', //row o column para que se haga filas o columnas los botones, ambos tienen la palabra row/column-reverse que es para intercambiar el lugar de los botones
      gap: 20, // Distribuye los espacios del contenedor al espacio.Si queremos que disminuya o contrario, modificamos el numero.
  },

});
