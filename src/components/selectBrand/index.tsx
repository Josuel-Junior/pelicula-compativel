import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import FilterComponent from "../filter";
import { brands } from "../../contants";
import { SelectModelAndBrandContext } from "../../contexts/contextBrandAndModel";
import { getObeserver } from "../../services/firebaseActionDbCompatible";
import { IsLoadingContext } from "../../contexts/contextIsLoading";
import { useNetInfo } from "@react-native-community/netinfo";

interface IProps {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  isConnected: boolean | null;
}

export const SelectBrand: React.FC<IProps> = ({
  error,
  setError,
  isConnected,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { setSelectBrand, selectBrand, setListModel, setSelectModel } =
    useContext(SelectModelAndBrandContext);

  const { setIsLoading } = useContext(IsLoadingContext);

  const handleOpenModal = () => {
    if (isConnected != false) {
      setModalVisible(true);
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "verifique sua conexão de rede",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };

  useEffect(() => {
    if (selectBrand.length > 0) {
      setIsLoading(true);
      setError(false);
      getObeserver(selectBrand.toLocaleLowerCase(), setListModel, setIsLoading);
    }
    setSelectModel("");
  }, [selectBrand]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FilterComponent
              setModal={setModalVisible}
              filter={brands}
              setSelect={setSelectBrand}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.buttonTouchableOpacity, error && styles.error]}
        onPress={handleOpenModal}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="smartphone"
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
              {selectBrand == "" ? "Selecione uma marca" : selectBrand}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
