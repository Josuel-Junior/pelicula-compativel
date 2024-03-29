import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./routes";
import { SelectModelAndBrandProvider } from "./src/contexts";

export default function App() {
  return (
    <SelectModelAndBrandProvider>
      <Routes />
    </SelectModelAndBrandProvider>
  );
}
