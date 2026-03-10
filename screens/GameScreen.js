import { Title } from "components/Title";
import { View, StyleSheet, Text } from "react-native";

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Text>+1</Text>
          <Text>-1</Text>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
});
