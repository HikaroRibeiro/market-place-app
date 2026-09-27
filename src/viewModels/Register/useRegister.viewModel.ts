import { useForm } from "react-hook-form"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";
import { useUserStore } from "../../shared/store/user-store";


export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation();
    const {setSession, user} = useUserStore();

    const {control, handleSubmit, formState: {errors}} = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: 'Usuário Teste',
            email: 'user.teste@email.com',
            password: '123456',
            confirmPassword: '123456',
            phone: '(21) 99999-9999',
        }
    })

    const onSubmit = handleSubmit(async(userData) => {
        const {confirmPassword, ...registerData} = userData;
        const mutationResponse = await userRegisterMutation.mutateAsync(registerData);
        setSession({
            user: mutationResponse.user,
            token: mutationResponse.token,
            refreshToken: mutationResponse.refreshToken
        });
    })

    console.log(user);

    return {
        control,
        onSubmit,
        errors
    }
}