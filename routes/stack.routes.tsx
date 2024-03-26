import { createStackNavigator } from "@react-navigation/stack";
import ListCompatible from "../src/screens/listCompatible/ListCompatible";
import TabBottomRoutes from "./tabBottom.routes";

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
        options={{ title: "Películas compativeis" }}
      />
    </Stack.Navigator>
  );
}
