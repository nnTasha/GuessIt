import { Colors } from "constants/colors";
import { StyleSheet, Text } from "react-native";

export const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 20,
    margin: 8,
  },
});
