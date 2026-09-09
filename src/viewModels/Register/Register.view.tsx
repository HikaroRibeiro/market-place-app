import { router } from "expo-router"
import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useRegisterViewModels } from "./useRegister.viewModels";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModels>> = ({setUserData, userData}) => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-blue-base">Tela para cadastro {userData.name}</Text>
            <TouchableOpacity onPress={() => {router.push("/login")}}>
                <Text>Ir para login</Text>
            </TouchableOpacity>
        </View>
    );
}