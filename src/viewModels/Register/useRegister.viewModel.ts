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
                    test: 'Galeria',
                    icon: 'images',
                    variant: 'primary',
                    onPress: () => console.log('Galeria'),
                },
                {
                    test: 'Camera',
                    icon: 'camera',
                    variant: 'primary',
                    onPress: () => console.log('Camera')
                }
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