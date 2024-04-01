import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { FadeIn, FadeInLeft } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { styles } from "./styles";
import * as Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";

export default function SuportUs() {
  const [showData, setShowData] = useState<boolean>(false);

  const copyToClipboard = async () => {
    setShowData(true);
    await Clipboard.setStringAsync("7fb830d7-07ee-4bdf-b41b-01af333f879b");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View entering={FadeIn.damping(30).mass(5)}>
          <Text style={styles.text}>Quer contribuir com nosso projeto?</Text>
        </Animated.View>

        <Animated.View entering={FadeInLeft.damping(30).mass(5)}>
          <Text style={styles.subText}>
            Nos ajude a manter este aplicativo sem anúncios.
          </Text>
        </Animated.View>
        {showData && (
          <Animated.View entering={FadeInLeft.damping(30).mass(5)}>
            <Text style={styles.subText}>
              Nome: Joseul Junior Fonseca Carneiro
            </Text>
            <Text style={styles.subText}>Banco: Nubank</Text>
            <Text style={styles.subText}>
              Chave Aleatória: 7fb830d7-07ee-4bdf-b41b-01af333f879b
            </Text>
          </Animated.View>
        )}
      </View>
      <View style={styles.contentMain}>
        <MaterialIcons name="pix" size={45} color={"#26A99F"} />
        <TouchableOpacity onPress={copyToClipboard}>
          <Text style={styles.textCopy}>Copiar código PIX</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
