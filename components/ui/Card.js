import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 8 : 16,
    backgroundColor: Colors.primary800,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
