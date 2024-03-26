import { StyleSheet, Text, View } from "react-native";

export default function SuportUs() {
  return (
    <View style={styles.container}>
      <Text>Suport US</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
