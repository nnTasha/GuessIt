import { Colors } from "constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GameScreen } from "screens/GameScreen";
import { StartGameScreen } from "screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let sreen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    sreen = <GameScreen />;
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{sreen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
