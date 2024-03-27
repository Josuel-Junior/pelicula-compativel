import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from "../../styles/colors";
import CarouselSlider from "../../carousel";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgb(41, 111, 205)" barStyle="light-content" />
      <View style={styles.backgroundTop} />
      <View style={styles.carousel}>
        <CarouselSlider />
      </View>
      <View style={styles.contentSelect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#f5f4",
  },
});
