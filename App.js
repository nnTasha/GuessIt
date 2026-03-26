import { Colors } from "constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GameOverScreen } from "screens/GameOverScreen";
import { GameScreen } from "screens/GameScreen";
import { StartGameScreen } from "screens/StartGameScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState("");
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  let sreen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    sreen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={() => setGameIsOver(true)}
        onUpdateRounds={(rounds) => setRoundsNumber(rounds)}
      />
    );
  }

  if (gameIsOver && userNumber) {
    sreen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={() => {
          setUserNumber("");
          setRoundsNumber(0);
          setGameIsOver(true);
        }}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
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
    </>
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
