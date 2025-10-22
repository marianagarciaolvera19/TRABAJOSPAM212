import React, { useEffect, useRef, useState } from "react";
import {View, Text, Animated, StyleSheet, Dimensions, ImageBackground} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function SplashScreenPro() {
  const [showMain, setShowMain] = useState(false); // controla la pantalla principal. El estado después del splash.

  // Animaciones Splash
  const fadeLogo = useRef(new Animated.Value(0)).current; //Ayuda a la animacion de opacidad del logo.
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current; //Mueve el texto verticalmente, pedimos altura de la pantalla, o sea que la animación estará a la mitad.
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {  //Se ejecutan 3 animaciones al mismo tiempo.
    // Animación inicial del logo: fade + scale + rotación
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    // Animación del texto: slide + fade
    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start(); //Animacion individual que moverá el texto que viene desde abajo hasta la mitad de la pantalla. 


    // Después de 3s, fade-out del Splash y mostrar contenido principal
    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync(); // oculta splash de Expo
        setShowMain(true); // muestra contenido principal
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/FOTO.jpeg")} //source manda llamar imagen, se pueden importad de manera local o de una pagina con el url.
        style={styles.background}
        resizeMode="cover" // 'cover' hace que la imagen llene toda la pantalla
      >
        <View style={styles.content}> 
          <Text style={styles.text}>¡Bienvenido!</Text>
        </View>
      </ImageBackground>
    );
  }

  // Splash animado
  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image //Animamos texto para que aparezca con la imagen.
        source={require("../assets/Foto.png")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          {
            opacity: fadeLogo,
            transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
          },
        ]}
      /> 
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        ¡ImageBackground & Splash Screen!
      </Animated.Text>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo,
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb700ff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1, // ocupa toda la pantalla
    width: "100%", // ancho completo
    height: "100%", // alto completo
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
});
