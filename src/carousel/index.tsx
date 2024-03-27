import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function CarouselSlider() {
  const width = Dimensions.get("window").width;

  const images = [
    require("../assets/carousel1.png"),
    require("../assets/carousel2.png"),
    require("../assets/carousel3.png"),
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={2000}
        autoPlayInterval={6000}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: width - 30,
              height: width / 2,
              marginHorizontal: 15,
              borderRadius: 15,
            }}
          />
        )}
      />
    </View>
  );
}
