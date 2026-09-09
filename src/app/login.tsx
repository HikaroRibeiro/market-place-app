import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-purple-base">Esta é a tela de login.</Text>
        
            <TouchableOpacity onPress={() => {router.push("/register")}}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}