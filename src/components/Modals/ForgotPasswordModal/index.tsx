import React, { createRef } from 'react';
import { Container, Button, Title, Spacer, Modal, TextInput, HelperText } from '../../../styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { colors } from '../../../styles/theme.json'
import { initialValuesSignIn, signInSchema } from '../../../schemas/formSchema';
import { Alert, Keyboard } from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

type ModalizeProps = {
    close: () => void,
    open: () => void
}

export const modalRef = createRef<ModalizeProps>()

const ForgotPasswordModal = () => {

    const forgotSchema = yup.object().shape({
        email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!')
    })

    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: forgotSchema,
        onSubmit: async (values) => {
            handleForgotPassword(values.email)
            Keyboard.dismiss()
        }
    })

    const handleForgotPassword = (email) => {

        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert('Redifinir senha', 'Enviamos um e-mail para você!'))
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <Modal ref={modalRef} adjustToContentHeight>
            <Container align='center' hasPadding>
                <Title small customPadding='10px 0 0 0' color='secondary'>Deseja redefinir sua senha?</Title>

                <Container hasPadding>

                    <TextInput
                        label='E-mail'
                        placeholder='Digite seu e-mail'
                        placeholderTextColor={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        //@ts-ignore
                        error={formik.touched.email && formik.errors.email}
                        right={
                            <TextInput.Icon
                                color={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                                name='email'
                            />
                        }
                    />
                    {formik.touched.email && formik.errors.email &&
                        <HelperText>
                            {formik.touched.email && formik.errors.email}
                        </HelperText>
                    }

                    <Spacer size={20}/>

                    <Button block onPress={formik.handleSubmit}>Redefinir senha</Button>
                </Container>

            </Container>
            
        </Modal>
    )
}

export default ForgotPasswordModal;