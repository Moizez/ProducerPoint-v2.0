import * as yup from 'yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';

// const initialValuesSignUp = { name: '', phone: '', email: '', password: '', passwordConfirmation: '', expoToken: '', isTerms: false }
const initialValuesSignUp = { name: '', email: '', password: '', phone: '' }
const initialValuesSignIn = { email: '', password: '', expoToken: '' }
const initialValuesEditProfile = { name: '', email: '', phone: '', password: '' }
const initialValuesTip = { home: '', away: '' }

const signInSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres.')
    .required('A senha é obrigatória!')
});


const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O seu nome deve ter no mínimo 3 caracteres.')
    .max(18, 'O seu nome de usuário deve ter no máximo 18 caracteres')
    .required('O nome é obrigatório!'),
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres.')
    .required('A senha é obrigatória!'),
  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('A confirmação de senha é obrigatória!'),
  phone: yup
    .string()
    .length(15, 'Digite um telefone válido.')
    .required('O telefone é obrigatório!'),
  // isTerms: yup
  //   .boolean()
  //   .required("Os termos e condições devem ser aceitos.")
  //   .oneOf([true], "Os termos e condições devem ser aceitos.")
  // cpf: yup
  //   .string()
  //   .test({
  //     name: 'cpf_validation',
  //     message: 'Digite um CPF válido!',
  //     test: (value) => cpf.isValid(value)
  //   })
  //   .required('Digite seu CPF'),
  // cnpj: yup
  //   .string()
  //   .test({
  //     name: 'cnpj_validation',
  //     message: 'Digite um CNPJ válido!',
  //     test: (value) => cnpj.isValid(value)
  //   })
  //   .required('Digite seu CNPJ'),
  // cep: yup
  //   .string()
  //   .length(9, 'Digite um CEP válido')
  //   .required('O CEP é obrigatório!'),
  // birthday: yup
  //   .string()
  //   .min(10, 'Digite uma data de nascimento válida')
  //   .required('Digite sua data de nascimento')
});

const editProfileSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O seu nome deve ter no mínimo 3 caracteres.')
    .required('O nome é obrigatório!'),
  email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
  phone: yup
    .string()
    .length(15, 'Digite um telefone válido.')
    .required('O telefone é obrigatório!'),
  password: yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
});

const tipSchema = yup.object().shape({
  home: yup.string().required(' '),
  away: yup.string().required(' '),
});

export {
  signInSchema, initialValuesSignIn,
  signUpSchema, initialValuesSignUp,
  editProfileSchema, initialValuesEditProfile,
  tipSchema, initialValuesTip
}
