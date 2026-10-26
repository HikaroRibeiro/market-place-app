import * as yup from 'yup';

export const loginScheme = yup.object().shape({
    email: yup.string().required('O campo email é obrigatorio').email('O campo email deve ser um email valido, exemplo: usuário@email.com'),
    password: yup.string().required('O campo senha é obrigatorio').min(6, 'O campo senha deve ter pelo menos 6 caracteres'),
})

// Este trecho faz a tipagem do yup. Não sendo necessário fazer a tipagem manual.
export type LoginFormData = yup.InferType<typeof loginScheme>