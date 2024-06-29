import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import CarouselSlider from "../../components/carousel";
import { SelectBrand } from "../../components/selectBrand";
import { styles } from "./styles";
import { colors } from "../../styles/colors";
import { SelectModel } from "../../components/selectModel";
import Loading from "../../components/loading";
import { SelectModelAndBrandContext } from "../../contexts/contextBrandAndModel";
import { useContext, useEffect, useState } from "react";
import { IsLoadingContext } from "../../contexts/contextIsLoading";
import { MaterialIcons } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isInternetReachable) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { isLoading } = useContext(IsLoadingContext);
  const { selectBrand, selectModel } = useContext(SelectModelAndBrandContext);

  const [errorBrand, setErrorBrand] = useState<boolean>(false);
  const [errorModel, setErrorModel] = useState<boolean>(false);

  const handleQuery = () => {
    if (selectBrand.length === 0) {
      setErrorBrand(true);
      return;
    }
    if (selectModel.length === 0) {
      setErrorModel(true);
      return;
    }
    if (!isConnected) {
      ToastAndroid.showWithGravityAndOffset(
        "verifique sua conexão de redee",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }
    navigation.navigate("listCompatible", {
      brand: selectBrand.toLocaleLowerCase(),
      model: selectModel.toLocaleLowerCase(),
    });
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.backgroundTop} />
      <View style={styles.carousel}>
        <CarouselSlider />
      </View>

      <View style={styles.contentSelect}>
        <SelectBrand
          error={errorBrand}
          setError={setErrorBrand}
          isConnected={isConnected}
        />
        <SelectModel
          error={errorModel}
          setError={setErrorModel}
          isConnected={isConnected}
        />
        <View>
          <TouchableOpacity
            style={styles.buttonTouchableOpacity}
            onPress={handleQuery}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="search"
                size={25}
                color="#fff"
                style={{ position: "absolute", left: 0 }}
              />
              <View style={{ width: "85%" }}>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Buscar
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
