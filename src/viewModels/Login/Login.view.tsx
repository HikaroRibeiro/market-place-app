import { router } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({control, onSubmit}) => {
    return (
        <KeyboardContainer>
            <View className="flex-1 px-[40px] justify-center items-center">
                <AuthFormHeader 
                    title="Login" 
                    subtitle="Informe seus dados pessoais e de acesso."  
                />

                <AppInputController
                    control={control}
                    name="email"
                    leftIcon="mail-outline" 
                    label="E-MAIL"
                    placeholder="mail@example.com.br"
                />

                <AppInputController
                    control={control}
                    name="password"
                    leftIcon="lock-closed-outline" 
                    label="SENHA"
                    placeholder="Sua senha."
                    secureTextEntry
                />

                <AppButton 
                    variant="filled" 
                    rightIcon="arrow-forward-outline" 
                    onPress={onSubmit}
                >
                    Teste      
                </AppButton>

                <TouchableOpacity onPress={() => {router.push("/register")}}>
                    <Text>Ir para cadastro</Text>
                </TouchableOpacity>
                
            </View> 
        </KeyboardContainer>
    );
}