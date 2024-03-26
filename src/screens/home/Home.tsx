import { StyleSheet, Text, View } from "react-native";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const handleClcik = () => {
    navigation.navigate("listCompatible", { name: "test" });
  };
  return (
    <View style={styles.container}>
      <Text onPress={handleClcik}>Home</Text>
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
