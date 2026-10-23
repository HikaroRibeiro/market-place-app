import { FC, useState } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
    control,
    onSubmit,
    errors
}) => {

    const [email, setEmail] = useState('')

    return (
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader 
                    title="Crie sua conta" 
                    subtitle="Informe seus dados pessoais e de acesso."  
                />

                <AppInputController
                    label="NOME"
                    leftIcon="person-outline" 
                    control={control}
                    name="name" 
                    errors={errors} 
                />


                <AppInputController
                    label="E-MAIL"
                    leftIcon="mail-outline" 
                    control={control}
                    name="email" 
                    errors={errors} 
                />

                <AppInputController
                    label="TELEFONE"
                    leftIcon="call-outline" 
                    control={control}
                    name="phone" 
                    errors={errors} 
                />

                <AppInputController
                    label="SENHA"
                    leftIcon="lock-closed-outline" 
                    control={control}
                    name="password" 
                    errors={errors}
                    secureTextEntry 
                />

                <AppInputController
                    label="CONFIRMAR SENHA"
                    leftIcon="lock-closed-outline" 
                    control={control}
                    name="confirmPassword" 
                    errors={errors}
                    secureTextEntry
                />

                <TouchableOpacity onPress={() => {onSubmit()}}>
                    <Text>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {router.push("/login")}}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </ScrollView>

        </KeyboardContainer>
    );
}