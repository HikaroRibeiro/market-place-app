import { FC, useState } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native"
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
                    control={control}
                    name="name" 
                    leftIcon="person-outline" 
                    label="NOME"
                    placeholder="Seu nome completo."
                    errors={errors}
                />

                <AppInputController
                    label="TELEFONE"
                    leftIcon="call-outline" 
                    control={control}
                    name="phone"
                    placeholder="(99) 99999-9999" 
                    errors={errors} 
                />
                
                <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

                <AppInputController
                    label="E-MAIL"
                    leftIcon="mail-outline" 
                    control={control}
                    name="email"
                    placeholder="mail@example.com.br" 
                    errors={errors} 
                />


                <AppInputController
                    label="SENHA"
                    leftIcon="lock-closed-outline" 
                    control={control}
                    name="password"
                    placeholder="Sua senha." 
                    errors={errors}
                    secureTextEntry 
                />

                <AppInputController
                    label="CONFIRMAR SENHA"
                    leftIcon="lock-closed-outline" 
                    control={control}
                    name="confirmPassword" 
                    placeholder="Confirme sua senha."
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