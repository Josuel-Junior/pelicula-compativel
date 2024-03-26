import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import Home from "../src/screens/home/Home";
import About from "../src/screens/about/About";
import SuportUs from "../src/screens/suportUs";

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="group" color={color} size={size} />
          ),
          tabBarLabel: "Sobre",
        }}
      />
      <Tab.Screen
        name="suportUs"
        component={SuportUs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6
              name="hand-holding-dollar"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Apoie",
        }}
      />
    </Tab.Navigator>
  );
}
