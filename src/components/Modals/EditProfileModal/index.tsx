import React, { createRef, useEffect } from 'react';
import { Container, Button, Title, Spacer, Modal, TextInput, HelperText, ContainerKeyboardAvoiding } from '../../../styles';
import { useFormik } from 'formik';
import { colors } from '../../../styles/theme.json'
import { editProfileSchema, initialValuesEditProfile } from '../../../schemas/formSchema';
import { Alert, Keyboard } from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import TextInputMask from '../../TextInputMask';
import { GlobalState } from '../../../types/userTypes';
import { useDispatch } from 'react-redux';

import { updateUserRequest } from '../../../store/modules/user/actions'

type ModalizeProps = {
    close: () => void,
    open: () => void
}

type EditProfileModalProps = {
    data: Object,
}

export const modalRef = createRef<ModalizeProps>()

const EditProfileModal = ({ data }: EditProfileModalProps) => {

    const dispatch = useDispatch()

    const updateUser = (values) => {

        firestore().collection("users")
            .doc(auth().currentUser.uid)
            .update(values).then(() => {
                dispatch(updateUserRequest(values))
                modalRef.current.close()
            })
    }

    const formik = useFormik({
        initialValues: initialValuesEditProfile,
        validationSchema: editProfileSchema,
        onSubmit: async (values) => {
            updateUser(values)
            Keyboard.dismiss()
        }
    })

    useEffect(() => {
        formik.setFieldValue('name', data?.name);
        formik.setFieldValue('email', data?.email);
        formik.setFieldValue('phone', data?.phone);
    }, []);



    return (
        <Modal ref={modalRef} adjustToContentHeight>
            <Container align='center'>
                <Title small customPadding='10px 0 0 0' color='secondary'>Deseja redefinir sua senha?</Title>

                <ContainerKeyboardAvoiding hasPadding>

                    <TextInput
                        label='Nome'
                        placeholder='Digite seu nome'
                        placeholderTextColor={formik.touched.name && formik.errors.name ? colors.danger : colors.secondary}
                        value={formik.values.name}
                        onChangeText={formik.handleChange('name')}
                        onBlur={formik.handleBlur('name')}
                        //@ts-ignore
                        error={formik.touched.name && formik.errors.name}
                    />
                    {formik.touched.name && formik.errors.name &&
                        <HelperText>
                            {formik.touched.name && formik.errors.name}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInput
                        label='E-mail'
                        placeholder='Digite seu e-mail'
                        placeholderTextColor={formik.touched.email && formik.errors.email ? colors.danger : colors.secondary}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        disabled
                        //@ts-ignore
                        error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <HelperText>
                            {formik.touched.email && formik.errors.email}
                        </HelperText>
                    }

                    <Spacer />

                    <TextInputMask
                        label='Telefone'
                        placeholder='Digite seu telefone'
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        placeholderTextColor={formik.touched.phone && formik.errors.phone ? colors.danger : colors.secondary}
                        value={formik.values.phone}
                        onChangeText={formik.handleChange('phone')}
                        onBlur={formik.handleBlur('phone')}
                        //@ts-ignore
                        error={formik.touched.phone && formik.errors.phone}
                    />
                    {formik.touched.phone && formik.errors.phone &&
                        <HelperText>
                            {formik.touched.phone && formik.errors.phone}
                        </HelperText>
                    }

                    {/* <Spacer />

                    <TextInput
                        label='Senha'
                        placeholder='Digite sua senha'
                        placeholderTextColor={formik.touched.password && formik.errors.password ? colors.danger : colors.secondary}
                        secureTextEntry
                        autoCapitalize='none'
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        //@ts-ignore
                        error={formik.touched.password && formik.errors.password}
                    />
                    {formik.touched.password && formik.errors.password &&
                        <HelperText type="error">
                            {formik.touched.password && formik.errors.password}
                        </HelperText>
                    } */}

                    <Spacer size={20} />

                    <Button block onPress={formik.handleSubmit}>Salvar</Button>

                </ContainerKeyboardAvoiding>

            </Container>

        </Modal>
    )
}

export default EditProfileModal;