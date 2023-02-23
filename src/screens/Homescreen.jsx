import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles.jsx";


export default function HomeScreen(){
    return(
        <View style={styles.formulario}>
        <Text>Pagina inicial</Text>
        <Button
          title="Ir para o Formulario"
          onPress={() => navigation.navigate("Formulario")}
        >Formulario</Button>
      </View>
    )
}