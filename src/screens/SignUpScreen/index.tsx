import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import PhotoModal from '../../components/Modals/PhotoModal';
import TermsModal, {
	modalRef as termsModalRef,
} from '../../components/Modals/TermsModal';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { initialValuesSignUp, signUpSchema } from '../../schemas/formSchema';
import { signUpRequest } from '../../store/modules/auth/actions';
import { colors } from '../../styles/theme.json';
import { navigate } from '../../utils/rootNavigation';
import { Keyboard } from 'react-native';

//@ts-ignore
import TextInputMask from '../../components/TextInputMask';

//Actions

import {
	Container,
	ContainerKeyboardAvoiding,
	TextInput,
	Title,
	Checkbox,
	Button,
	Spacer,
	HelperText,
	Snackbar,
	Touchable,
	Text,
	ScrollView,
} from '../../styles';
import { GlobalState } from '../../types/global';
import { closeAlert } from '../../store/modules/storageless/actions';

const SignUp = ({ route }) => {
	const { expoToken } = route?.params;

	const dispatch = useDispatch();
	const { loading } = useSelector((state: GlobalState) => state.auth);
	const {
		alert: { message, visible, color },
	} = useSelector((state: GlobalState) => state.utils);
	const [eye, setEye] = useState(false);

	const formik = useFormik({
		initialValues: initialValuesSignUp,
		validationSchema: signUpSchema,
		onSubmit: async (values) => {
			delete values?.passwordConfirmation;
			values.expoToken = expoToken;

			console.log(values);
			dispatch(signUpRequest(values));
			Keyboard.dismiss();
		},
	});

	const setField = () => formik.setFieldValue('isTerms', true);

	return (
		<>
			<ScrollView background="light" customPadding="10px 20px 0 20px">
				<Spacer size={50} />

				<Container flex={0} align="center" justify="center">
					<Title small color="primary">
						Realize o seu cadastro
					</Title>
				</Container>

				{/* <Container flex={0} align='center' justify='center'>
                    <Title small color='primary'>Realize o seu cadastro</Title>
                </Container> */}

				<Spacer />

				<ContainerKeyboardAvoiding>
					<TextInput
						label="Nome"
						placeholder="Digite seu nome"
						placeholderTextColor={
							formik.touched.name && formik.errors.name
								? colors.danger
								: colors.primary
						}
						value={formik.values.name}
						onChangeText={formik.handleChange('name')}
						onBlur={formik.handleBlur('name')}
						//@ts-ignore
						error={formik.touched.name && formik.errors.name}
					/>
					{formik.touched.name && formik.errors.name && (
						//@ts-ignore
						<HelperText>{formik.touched.name && formik.errors.name}</HelperText>
					)}

					<Spacer />

					<TextInput
						label="E-mail"
						placeholder="Digite seu e-mail"
						placeholderTextColor={
							formik.touched.email && formik.errors.email
								? colors.danger
								: colors.primary
						}
						keyboardType="email-address"
						autoCapitalize="none"
						value={formik.values.email}
						onChangeText={formik.handleChange('email')}
						onBlur={formik.handleBlur('email')}
						//@ts-ignore
						error={formik.touched.email && formik.errors.email}
					/>
					{formik.touched.email && formik.errors.email && (
						//@ts-ignore
						<HelperText>
							{formik.touched.email && formik.errors.email}
						</HelperText>
					)}

					<Spacer />

					<TextInputMask
						label="Telefone"
						placeholder="Digite seu telefone"
						type={'cel-phone'}
						options={{
							maskType: 'BRL',
							withDDD: true,
							dddMask: '(99) ',
						}}
						placeholderTextColor={
							formik.touched.phone && formik.errors.phone
								? colors.danger
								: colors.primary
						}
						value={formik.values.phone}
						onChangeText={formik.handleChange('phone')}
						onBlur={formik.handleBlur('phone')}
						//@ts-ignore
						error={formik.touched.phone && formik.errors.phone}
					/>
					{formik.touched.phone && formik.errors.phone && (
						//@ts-ignore
						<HelperText>
							{formik.touched.phone && formik.errors.phone}
						</HelperText>
					)}

					<Spacer />

					<TextInput
						label="Senha"
						placeholder="Digite sua senha"
						placeholderTextColor={
							formik.touched.password && formik.errors.password
								? colors.danger
								: colors.primary
						}
						secureTextEntry
						autoCapitalize="none"
						value={formik.values.password}
						onChangeText={formik.handleChange('password')}
						onBlur={formik.handleBlur('password')}
						//@ts-ignore
						error={formik.touched.password && formik.errors.password}
					/>
					{formik.touched.password && formik.errors.password && (
						//@ts-ignore
						<HelperText type="error">
							{formik.touched.password && formik.errors.password}
						</HelperText>
					)}

					<Spacer />

					<TextInput
						label="Confirme sua senha"
						placeholder="Digite novamente a sua senha"
						placeholderTextColor={
							formik.touched.passwordConfirmation &&
							formik.errors.passwordConfirmation
								? colors.danger
								: colors.primary
						}
						secureTextEntry={eye ? false : true}
						autoCapitalize="none"
						value={formik.values.passwordConfirmation}
						onChangeText={formik.handleChange('passwordConfirmation')}
						onBlur={formik.handleBlur('passwordConfirmation')}
						//@ts-ignore
						error={
							formik.touched.passwordConfirmation &&
							formik.errors.passwordConfirmation
						}
						right={
							<TextInput.Icon
								color={
									formik.touched.passwordConfirmation &&
									formik.errors.passwordConfirmation
										? colors.danger
										: colors.primary
								}
								name={eye ? 'eye' : 'eye-off'}
								onPress={() => setEye(!eye)}
							/>
						}
					/>
					{formik.touched.passwordConfirmation &&
						formik.errors.passwordConfirmation && (
							//@ts-ignore
							<HelperText type="error">
								{formik.touched.passwordConfirmation &&
									formik.errors.passwordConfirmation}
							</HelperText>
						)}

					<Spacer />

					<Container row align="center">
						{Platform.OS === 'android' ? (
							<Checkbox.Android
								uncheckedColor={
									formik.touched.isTerms && formik.errors.isTerms
										? colors.danger
										: colors.primary
								}
								color={colors.primary}
								status={formik.values.isTerms ? 'checked' : 'unchecked'}
								onPress={() =>
									formik.setFieldValue('isTerms', !formik.values.isTerms)
								}
							/>
						) : (
							<Checkbox.IOS
								color={colors.primary}
								status={formik.values.isTerms ? 'checked' : 'unchecked'}
								onPress={() =>
									formik.setFieldValue('isTerms', !formik.values.isTerms)
								}
							/>
						)}

						<Text
							color={
								formik.touched.isTerms && formik.errors.isTerms
									? 'danger'
									: 'primary'
							}
						>
							Eu concordo com os{' '}
						</Text>
						<Touchable
							onPress={() => navigate('TermsScreen', { setField: setField })}
						>
							<Text
								color={
									formik.touched.isTerms && formik.errors.isTerms
										? 'danger'
										: 'primary'
								}
								decoration="underline"
								bold
							>
								termos e condições
							</Text>
						</Touchable>
					</Container>

					{formik.touched.isTerms && formik.errors.isTerms && (
						//@ts-ignore
						<HelperText type="error">
							{formik.touched.isTerms && formik.errors.isTerms}
						</HelperText>
					)}

					<Spacer size={20} />

					<Button
						block
						background="primary"
						onPress={formik.handleSubmit}
						loading={loading}
					>
						Cadastrar
					</Button>

					<Container align="center">
						<Touchable
							onPress={() => navigate('SignInScreen')}
							align="center"
							justify="center"
							spacing="30px 0"
							activeOpacity={0.7}
						>
							<Text color="primary" small>
								Já tem uma conta?{' '}
								<Text color="primary" small bold>
									Logue-se.
								</Text>
							</Text>
						</Touchable>
					</Container>
				</ContainerKeyboardAvoiding>
			</ScrollView>

			<Snackbar
				visible={visible}
				onDismiss={() => dispatch(closeAlert())}
				background={color}
				time={3000}
			>
				{message}
			</Snackbar>

			<TermsModal setField={(event) => formik.setFieldValue('terms', event)} />
		</>
	);
};

export default SignUp;
