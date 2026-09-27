import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    control,
    onSubmit,
    errors
}) => {
    return (
        <View className="flex-1 justify-center">
            <AppInput />
            <TouchableOpacity onPress={() => {onSubmit()}}>
                <Text>Ir para login</Text>
            </TouchableOpacity>
        </View>
    );
}