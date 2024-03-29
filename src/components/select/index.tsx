import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useCallback, useContext, useEffect, useState } from "react";

import { styles } from "./styles";
import FilterComponent from "../filter";
import { brands } from "../../contants";
import { SelectModelAndBrandContext } from "../../contexts";

export const SelectComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { setSelectBrand, selectBrand } = useContext(
    SelectModelAndBrandContext
  );

  const test = process.env.EXPO_PUBLIC_API_URL;
  console.log(test);

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
        style={styles.buttonTouchableOpacity}
        onPress={() => setModalVisible(true)}
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
            {}
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {selectBrand == "" ? "Selecione um modelo" : selectBrand}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
