import { router } from "expo-router"
import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({control, onSubmit, errors}) => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-blue-base">Tela para cadastro</Text>
            <TouchableOpacity onPress={() => {router.push("/login")}}>
                <Text>Ir para login</Text>
            </TouchableOpacity>
        </View>
    );
}