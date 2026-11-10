import { useForm } from "react-hook-form"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useAppModals } from "../../shared/hooks/useAppModals";


export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation();
    const {setSession, user} = useUserStore();
    const modals = useAppModals();

    const handleSelectAvatar = () => {
        modals.showSelection({
            title: 'Selecione um avatar',
            message: 'Selecione um avatar para o seu perfil',
            options: [
                {
                    test: 'Avatar 1',
                    icon: 'images',
                    variant: 'primary',
                    onPress: () => console.log('Avatar 1'),
                },
                {
                    test: 'Avatar 2',
                    icon: 'images',
                    variant: 'primary',
                    onPress: () => console.log('Avatar 2')
                },
                {
                    test: 'Avatar 3',
                    icon: 'images',
                    variant: 'primary',
                    onPress: () => console.log('Avatar 3')
                },
                {
                    test: 'Avatar 4',
                    icon: 'images',
                    variant: 'primary',
                    onPress: () => console.log('Avatar 4')
                },
            ]
        })
    }

    const {control, handleSubmit, formState: {errors}} = useForm<RegisterFormData>({
        resolver: yupResolver(registerScheme),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
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
        errors,
        handleSelectAvatar
    }
}