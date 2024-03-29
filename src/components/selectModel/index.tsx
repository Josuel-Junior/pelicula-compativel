import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import { styles } from "./styles";
import FilterComponent from "../filter";
import { brands } from "../../contants";

export const SelectModel: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
            {/* <FilterComponent setModal={setModalVisible} filter={brands} /> */}
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
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Selecione um modelo
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
