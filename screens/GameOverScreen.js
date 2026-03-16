import { PrimaryButton } from "components/ui/PrimaryButton";
import { Title } from "components/ui/Title";
import { Colors } from "constants/colors";
import { View, Image, StyleSheet, Text } from "react-native";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={style.rootContainer}>
      <Title>Game Over!</Title>
      <View style={style.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={style.image}
        />
      </View>
      <Text style={style.summaryText}>
        Your phone needed <Text style={style.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={style.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
