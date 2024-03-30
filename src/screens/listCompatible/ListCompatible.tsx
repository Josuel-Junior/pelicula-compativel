import { StyleSheet, Text, View } from "react-native";

export default function ListCompatible({ route }: any) {
  return (
    <View style={styles.container}>
      <Text>ListCompatible{route?.params.brand}</Text>
      <Text>ListCompatible{route?.params.model}</Text>
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
