import { Button, Text, View } from "react-native";

export default function SobreScreen({ navigation }) {
    return (
        <View>
            <Text>Sou o Sobre </Text>
            {<Buttonon
                title="Vá para laaa"
                onPress={() => navigation.navigate("Home")}
            />}
        </View>
    );
};