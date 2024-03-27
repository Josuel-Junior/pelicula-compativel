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

const results = [
  {
    id: 1,
    brandOrModel: "Samsung",
    logo: require("../../assets/icons/motorola.png"),
  },
  {
    id: 2,
    brandOrModel: "Samsung",
    logo: require("../../assets/icons/motorola.png"),
  },
  {
    id: 3,
    brandOrModel: "Samsung",
    logo: require("../../assets/icons/motorola.png"),
  },
  {
    id: 4,
    brandOrModel: "Motorola",
    logo: require("../../assets/icons/motorola.png"),
  },
  {
    id: 5,
    brandOrModel: "Apple",
    logo: require("../../assets/icons/motorola.png"),
  },
];
//   {
//     id: 1,
//     name: "Beatriz Farias",
//     email: "bia.farias@gmail.com",
//     avatar: "https://i.pravatar.cc/150?img=31",
//   },
//   {
//     id: 2,
//     name: "Julia Santos",
//     email: "jujusantos123@hotmail.com",
//     avatar: "https://i.pravatar.cc/150?img=32",
//   },
//   {
//     id: 3,
//     name: "Pedro Mendonça",
//     email: "eu@pedro.com",
//     avatar: "https://i.pravatar.cc/150?img=33",
//   },
//   {
//     id: 4,
//     name: "Julia Shinoda",
//     email: "julia.shinoda@japao.com",
//     avatar: "https://i.pravatar.cc/150?img=34",
//   },
//   {
//     id: 5,
//     name: "Andrezza Shinoda",
//     email: "andrezza99@hotmail.com",
//     avatar: "https://i.pravatar.cc/150?img=35",
//   },
//   {
//     id: 6,
//     name: "Sara Maria",
//     email: "saramaria@gmail.com",
//     avatar: "https://i.pravatar.cc/150?img=36",
//   },
// ];

interface IPropsListItem {
  id: number;
  brandOrModel: string;
  logo: any;
}

interface IPropsFilter {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterComponent: React.FC<IPropsFilter> = ({ setModal }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [list, setList] = useState<IPropsListItem[]>([]);

  useEffect(() => {
    if (searchText === "") {
      setList(results);
    } else {
      setList(
        results.filter((item) =>
          item.brandOrModel.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
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
            onPress={(prev) => setModal(!prev)}
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
