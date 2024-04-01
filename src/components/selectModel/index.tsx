import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  ToastAndroid,
} from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { styles } from "./styles";
import FilterComponent from "../filter";
import { SelectModelAndBrandContext } from "../../contexts/contextBrandAndModel";
import { addLogo } from "../../functionsUtils";

interface IProps {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  isConnected: boolean | null;
}

export const SelectModel: React.FC<IProps> = ({
  setError,
  error,
  isConnected,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { listModel, setSelectModel, selectModel } = useContext(
    SelectModelAndBrandContext
  );

  const newList = addLogo(listModel);

  const handleSelectModel = () => {
    setError(false);
    if (newList.length > 0) {
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
    }
  };

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
              filter={newList}
              setSelect={setSelectModel}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.buttonTouchableOpacity, error && styles.error]}
        onPress={handleSelectModel}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons
            name="screen-smartphone"
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
              {selectModel == "" ? "Selecione um modelo" : selectModel}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
