import { Colors } from "constants/colors";
import { Text, StyleSheet } from "react-native";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
