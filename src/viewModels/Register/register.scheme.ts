import * as yup from 'yup';

export const registerScheme = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatorio').min(3, 'O campo nome deve ter pelo menos 3 caracteres'),
    email: yup.string().required('O campo email é obrigatorio').email('O campo email deve ser um email valido, exemplo: usuário@email.com'),
    password: yup.string().required('O campo senha é obrigatorio').min(6, 'O campo senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup.string().required('O campo confirmar senha é obrigatorio').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    phone: yup.string().required('O campo telefone é obrigatorio').matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'O campo telefone deve ser um telefone valido, exemplo: (99) 99999-9999'),
})

// Este trecho faz a tipagem do yup. Não sendo necessário fazer a tipagem manual.
export type RegisterFormData = yup.InferType<typeof registerScheme>