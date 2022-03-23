import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { initialValuesSignIn, signInSchema } from '../../schemas/formSchema';
import { colors } from '../../styles/theme.json';
import { navigate } from '../../utils/rootNavigation';
//@ts-ignore
import logo from '../../assets/images/logo.png';
import { Keyboard } from 'react-native';

//Actions
import { signInRequest } from '../../store/modules/auth/actions';

import {
	Container,
	ContainerKeyboardAvoiding,
	Title,
	Text,
	TextInput,
	Button,
	Spacer,
	HelperText,
	Snackbar,
	Touchable,
	Image,
} from '../../styles';
import { GlobalState } from '../../types/global';
import { closeAlert, openAlert } from '../../store/modules/storageless/actions';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const SignIn = () => {
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	const dispatch = useDispatch();
	const { loading } = useSelector((state: GlobalState) => state.auth);
	const {
		alert: { message, visible, color, time },
	} = useSelector((state: GlobalState) => {
		console.log(state);
		return state.utils;
	});
	const [eye, setEye] = useState(false);

	const formik = useFormik({
		initialValues: initialValuesSignIn,
		validationSchema: signInSchema,
		onSubmit: async (values) => {
			dispatch(signInRequest(values));
			Keyboard.dismiss();
		},
	});

	const registerForPushNotificationsAsync = async () => {
		let token: string;
		if (Constants.isDevice) {
			const { status: existingStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== 'granted') {
				// dispatch(
				// 	openAlert({
				// 		message: 'Falha ao obter token push para notificação push!',
				// 		color: colors.danger,
				// 	})
				// );
				return;
			}
			token = (await Notifications.getExpoPushTokenAsync()).data;
			console.log('Expo Token: ', token);
		} else {
			// dispatch(
			// 	openAlert({
			// 		message: 'Deve usar dispositivo físico para notificações push',
			// 		color: colors.info,
			// 	})
			// );
		}

		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			});
		}

		return token;
	};

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) =>
			//@ts-ignore
			formik.setFieldValue('expoToken', token)
		);
		//@ts-ignore
		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				//@ts-ignore
				setNotification(notification);
			});
		//@ts-ignore
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				console.log(response);
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<>
			<Container background="light" hasPadding>
				<Container align="center" justify="center">
					<Image source={logo} height={200} width={200} />
				</Container>

				<Container flex={0} align="center" justify="center">
					<Title small color="primary">
						Realize o seu login
					</Title>
				</Container>

				<Spacer />

				<ContainerKeyboardAvoiding>
					<TextInput
						label="Seu e-mail"
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
						right={
							<TextInput.Icon
								color={
									formik.touched.email && formik.errors.email
										? colors.danger
										: colors.primary
								}
								name="email"
							/>
						}
					/>
					{formik.touched.email && formik.errors.email && (
						//@ts-ignore
						<HelperText>
							{formik.touched.email && formik.errors.email}
						</HelperText>
					)}

					<Spacer />

					<TextInput
						label="Sua senha"
						placeholder="Digite sua senha"
						placeholderTextColor={
							formik.touched.password && formik.errors.password
								? colors.danger
								: colors.primary
						}
						secureTextEntry={eye ? false : true}
						autoCapitalize="none"
						value={formik.values.password}
						onChangeText={formik.handleChange('password')}
						onBlur={formik.handleBlur('password')}
						//@ts-ignore
						error={formik.touched.password && formik.errors.password}
						right={
							<TextInput.Icon
								color={
									formik.touched.password && formik.errors.password
										? colors.danger
										: colors.primary
								}
								name={eye ? 'eye' : 'eye-off'}
								onPress={() => setEye(!eye)}
							/>
						}
					/>
					{formik.touched.password && formik.errors.password && (
						//@ts-ignore
						<HelperText type="error">
							{formik.touched.password && formik.errors.password}
						</HelperText>
					)}

					<Spacer size={20} />

					<Button block onPress={formik.handleSubmit} loading={loading}>
						Entrar
					</Button>

					<Container align="center">
						<Touchable
							onPress={() =>
								navigate('SignUpScreen', { expoToken: formik.values.expoToken })
							}
							align="center"
							justify="center"
							spacing="30px 0"
							activeOpacity={0.7}
						>
							<Text color="primary" small>
								Novo por aqui?{' '}
								<Text color="primary" small bold>
									Cadastre-se.
								</Text>
							</Text>
						</Touchable>
					</Container>
				</ContainerKeyboardAvoiding>
			</Container>

			<Snackbar
				visible={visible}
				onDismiss={() => dispatch(closeAlert())}
				time={time}
				background={color}
			>
				{message}
			</Snackbar>
		</>
	);
};

export default SignIn;
