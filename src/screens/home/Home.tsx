import { View, StatusBar } from "react-native";

import CarouselSlider from "../../components/carousel";
import { SelectComponent } from "../../components/select";
import { styles } from "./styles";
import { colors } from "../../styles/colors";
import { SelectModel } from "../../components/selectModel";
import Loading from "../../components/loading";
import { SelectModelAndBrandContext } from "../../contexts/contextBrandAndModel";
import { useContext, useState } from "react";
import { IsLoadingContext } from "../../contexts/contextIsLoading";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.backgroundTop} />
      <View style={styles.carousel}>
        <CarouselSlider />
      </View>
      <View style={styles.contentSelect}>
        <SelectComponent />
        <SelectModel />
      </View>
    </View>
  );
}
