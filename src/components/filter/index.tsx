import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { styles, stylesItem } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { DataPhone } from "../../interfaces";

interface IPropsFilter {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  filter: DataPhone[];
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterComponent: React.FC<IPropsFilter> = ({
  setModal,
  filter,
  setSelect,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [list, setList] = useState<DataPhone[]>([]);

  const handleSelect = (select: string) => {
    setSelect(select);
    setModal(false);
  };

  useEffect(() => {
    if (searchText === "") {
      setList(filter);
    } else {
      setList(
        filter.filter((item) =>
          item.brandOrModel.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={(prev) => setModal(!prev)}
        style={{ height: 49 }}
      >
        <MaterialIcons
          name="arrow-back"
          size={38}
          color="#000"
          style={{
            left: 15,
            top: 10,
          }}
        />
      </TouchableOpacity>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma marca"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <MaterialIcons
          name="search"
          size={25}
          color="#000"
          style={{ position: "absolute", right: 40 }}
        />
      </View>

      <FlatList
        accessibilityLabel="Lista de marcas de celular"
        data={list}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={stylesItem.itemContainer}
            onPress={() => handleSelect(item.brandOrModel)}
          >
            <Image source={item?.logo} style={stylesItem.itemLogo} />
            <View accessibilityLabel="Marcas de celular">
              <Text style={stylesItem.text}>{item?.brandOrModel}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id?.toString()}
      />
    </View>
  );
};

export default FilterComponent;
