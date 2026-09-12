import { useForm } from "react-hook-form"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { yupResolver } from "@hookform/resolvers/yup"


export const useRegisterViewModel = () => {

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

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return {
        control,
        onSubmit,
        errors
    }
}