import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 5,
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },

  itemContainer: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: colors.secondary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 5,
  },
  itemContainerBox: {
    flexDirection: "row",
    marginLeft: 20,
  },
  text: {
    fontSize: 18,
    color: colors.text,
    paddingVertical: 10,
    marginLeft: 10,
  },
  empty: {
    width: "100%",
    textAlign: "center",
    color: colors.text,
  },
});
