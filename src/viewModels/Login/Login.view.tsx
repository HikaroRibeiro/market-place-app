import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const LoginView = () => {
    return (
        <KeyboardContainer>
            <View className="flex-1 items-center justify-center px-[40px]">
                <AuthFormHeader 
                    title="Login" 
                    subtitle="Informe seus dados pessoais e de acesso."  
                />

                <AppInput />

                <TouchableOpacity onPress={() => {router.push("/register")}}>
                    <Text>Ir para cadastro</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardContainer>
    );
}