import { createStackNavigator } from "@react-navigation/stack";
import ListCompatible from "../src/screens/listCompatible/ListCompatible";
import TabBottomRoutes from "./tabBottom.routes";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabHome"
        component={TabBottomRoutes}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="listCompatible"
        component={ListCompatible}
        options={({ navigation }) => ({
          title: "Películas compativeis",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={38}
              color="#000"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
