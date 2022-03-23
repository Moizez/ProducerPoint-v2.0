import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { goBack } from '../utils/rootNavigation';
import { colors } from '../styles/theme.json';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TermsScreen from '../screens/SignUpScreen/TermsScreen';
import TourScreen from '../screens/TourScreen';
import { StatusBar } from 'react-native';

import { Touchable } from '../styles';

const Stack = createStackNavigator();

type AuthRoutesProps = {
	initialRoute: boolean;
};

const AuthRoutes = ({ initialRoute }: AuthRoutesProps) => {
	return (
		<>
			<StatusBar backgroundColor={colors.primary} barStyle="light-content" />
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={initialRoute ? 'SignInScreen' : 'TourScreen'}
			>
				<Stack.Screen name="TourScreen" component={TourScreen} />
				<Stack.Screen name="SignInScreen" component={SignInScreen} />
				<Stack.Screen
					name="SignUpScreen"
					component={SignUpScreen}
					options={{
						headerShown: true,
						headerTitle: '',
						headerStyle: { backgroundColor: colors.primary, height: 50 },
						headerLeft: () => (
							<Touchable customPadding="0 10px" onPress={() => goBack()}>
								<Icon name="chevron-left" color={colors.light} size={35} />
							</Touchable>
						),
					}}
				/>
				<Stack.Screen
					name="TermsScreen"
					component={TermsScreen}
					options={{ presentation: 'modal' }}
				/>
			</Stack.Navigator>
		</>
	);
};

export default AuthRoutes;
