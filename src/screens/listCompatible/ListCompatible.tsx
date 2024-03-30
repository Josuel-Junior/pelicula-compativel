import { FlatList, ToastAndroid, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { readDbCompatible } from "../../services/firebaseActionDbCompatible";
import { DataPhone } from "../../interfaces";
import { capitalizeFirstLetter } from "../../functionsUtils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import Loading from "../../components/loading";
export default function ListCompatible({ route }: any) {
  const [searchText, setSearchText] = useState<string>("");

  const [list, setList] = useState<DataPhone[]>([]);

  const [filter, setFilter] = useState<DataPhone[]>([]);

  const [error, setError] = useState<boolean>();

  const { brand, model } = route?.params;

  useEffect(() => {
    setError(true);
    const fetchData = async () => {
      try {
        await readDbCompatible(setList, brand, model);
        setError(false);
      } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
          "Erro ao buscar dados no servidor",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
    };

    fetchData();
  }, [brand, model]);

  const filterData = useCallback(() => {
    const filtered = list.filter((item) =>
      item.brand.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilter(filtered);
  }, [list, searchText]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <View style={styles.container}>
      {error && <Loading />}

      <View>
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
      </View>
      <View style={styles.list}>
        {filter.length === 0 && error == false ? (
          <Text style={styles.empty}>Lista vazia</Text>
        ) : (
          <FlatList
            data={filter}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <MaterialCommunityIcons
                  name="cellphone-check"
                  size={25}
                  color={colors.text}
                  style={{ position: "absolute", right: 40 }}
                />
                <View style={styles.itemContainerBox}>
                  <Text style={styles.text}>
                    {capitalizeFirstLetter(item.brand)}:
                  </Text>
                  <Text style={styles.text}>
                    {capitalizeFirstLetter(item.brandOrModel)}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id?.toString()}
          />
        )}
      </View>
    </View>
  );
}
