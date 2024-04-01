import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.secondary,
  },
  subText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.secondary,
  },
  contentMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textCopy: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingHorizontal: 35,
    paddingVertical: 15,
    color: colors.secondary,
    borderRadius: 15,
  },
});
