import React from "react";
import { View, Text, Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

interface OpenExternalLinkProps {
  url: string;
}

const OpenExternalLink: React.FC<OpenExternalLinkProps> = ({ url }) => {
  const handleOpenLink = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Não é possível abrir o link: ${url}`);
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={handleOpenLink}>
        <Text style={styles.privacypolicy}>Política de Privacidade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpenExternalLink;
