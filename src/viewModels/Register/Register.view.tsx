import { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    control,
    onSubmit,
    errors
}) => {

    const [email, setEmail] = useState('')

    return (
        <View className="flex-1 justify-center">

            <AppInput 
                leftIcon="mail-outline" 
                label="E-mail" 
                value={email} 
                onChangeText={setEmail}
                error="E-mail com formato inválido." />
            <AppInput leftIcon="lock-closed-outline" label="Senha" />

            <TouchableOpacity onPress={() => {onSubmit()}}>
                <Text>Ir para login</Text>
            </TouchableOpacity>
        </View>
    );
}