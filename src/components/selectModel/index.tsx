import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { styles } from "./styles";
import FilterComponent from "../filter";
import { SelectModelAndBrandContext } from "../../contexts/contextBrandAndModel";
import { addLogo } from "../../functionsUtils";

export const SelectModel: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { listModel, setSelectModel, selectModel } = useContext(
    SelectModelAndBrandContext
  );

  const newList = addLogo(listModel);

  const handleSelectModel = () => {
    if (newList.length > 0) {
      setModalVisible(true);
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
        style={styles.buttonTouchableOpacity}
        onPress={handleSelectModel}
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
              {selectModel == "" ? "Selecione um modelo" : selectModel}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
