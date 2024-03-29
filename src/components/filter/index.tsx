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

interface IPropsListItem {
  id: number;
  brandOrModel: string;
  logo?: any;
}

interface IPropsFilter {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  filter: IPropsListItem[];
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterComponent: React.FC<IPropsFilter> = ({
  setModal,
  filter,
  setSelect,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [list, setList] = useState<IPropsListItem[]>([]);

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
      <TouchableOpacity onPress={(prev) => setModal(!prev)}>
        <MaterialIcons
          name="arrow-back"
          size={25}
          color="#000"
          style={{ left: 15, marginVertical: 5 }}
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
        data={list}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={stylesItem.itemContainer}
            onPress={() => handleSelect(item.brandOrModel)}
          >
            <Image source={item?.logo} style={stylesItem.itemLogo} />
            <View>
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
