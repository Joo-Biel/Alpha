import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";


export default function HomeScreen({ navigation }) {
  return (
    <View
      style={styles.container}
    >
      <Text>Eu sou a Home</Text>
      <Button
        title="Ir para Sobre"
        // Realiza a ação de enviar para tela Sobre
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};