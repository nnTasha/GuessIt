import { PrimaryButton } from "components/ui/PrimaryButton";
import { Title } from "components/ui/Title";
import { Colors } from "constants/colors";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: imageSize / 15,
    borderWidth: 1,
  };

  return (
    <ScrollView style={style.widthContainer}>
      <View style={style.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[style.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  widthContainer: { flex: 1 },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    // margin: deviceWidth < 380 ? 18 : 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 18 : 24,
    textAlign: "center",
    marginBottom: deviceWidth < 380 ? 12 : 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
