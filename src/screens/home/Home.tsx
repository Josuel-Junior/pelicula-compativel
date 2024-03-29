import { View, StatusBar } from "react-native";

import CarouselSlider from "../../components/carousel";
import { SelectComponent } from "../../components/select";
import { styles } from "./styles";
import { colors } from "../../styles/colors";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.backgroundTop} />
      <View style={styles.carousel}>
        <CarouselSlider />
      </View>
      <View style={styles.contentSelect}>
        <SelectComponent />
        {/* <SelectComponent /> */}
      </View>
    </View>
  );
}
