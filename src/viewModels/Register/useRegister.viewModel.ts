import { useForm } from "react-hook-form"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useAppModals } from "../../shared/hooks/useAppModals";
import { useCamera } from "../../shared/hooks/useCamera";
import { useGallery } from "../../shared/hooks/useGallery";
import { useImage } from "../../shared/hooks/useImage";

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation();
    const {setSession, user} = useUserStore();
    const {handleSelectImage} = useImage({});

    const handleSelectAvatar = async () => {
        await handleSelectImage()
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