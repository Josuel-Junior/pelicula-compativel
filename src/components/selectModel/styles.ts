import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    position: "relative",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "100%",
    width: "100%",
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
