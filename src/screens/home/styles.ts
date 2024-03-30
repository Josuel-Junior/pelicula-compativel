import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    position: "relative",
  },
  backgroundTop: {
    position: "absolute",
    backgroundColor: colors.primary,
    top: 0,
    height: 150,
    width: "100%",
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  carousel: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  contentSelect: {
    height: "auto",
    flex: 3,
    width: "90%",
    justifyContent: "center",
  },
  buttonTouchableOpacity: {
    flexDirection: "row",
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    backgroundColor: colors.primary,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 5,
  },
});
