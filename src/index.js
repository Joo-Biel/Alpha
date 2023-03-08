import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Homescreen";
import SplashScreen from "./screens/SplashScreen";
import FormScreen from "./screens/FormScreen";

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MBTNav" component={MBTNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MBT = createMaterialBottomTabNavigator();
function MBTNavigation() {
  return (
    <MBT.Navigator>
      <MBT.Screen name="Início" component={HomeScreen} />
      <MBT.Screen name="Página 2" component={HomeScreen} />
      <MBT.Screen name="Página 3" component={HomeScreen} />
      <MBT.Screen name="Formulario" component={FormScreen} />
    </MBT.Navigator>
  );
}