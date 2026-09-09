import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-blue-base">Tela privada</Text>
            <TouchableOpacity onPress={() => {router.push("/login")}}>
                <Text>Encerrar sessão!</Text>
            </TouchableOpacity>
        </View>
    );
}