
import { DefaultTheme, Provider as PaperProvider, Text } from "react-native-paper";
import { useColorScheme, View } from "react-native";
import { DarkTheme } from "@react-navigation/native";
import HomeScreen from "./src/screens/Homescreen";
import RootNavigation from "./src/navigation";


export default function App() {
  const theme = useColorScheme() ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <RootNavigation></RootNavigation>
    </PaperProvider>
  );
}