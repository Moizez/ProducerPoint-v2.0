import React from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../styles/theme.json';
import { createStackNavigator } from '@react-navigation/stack';

import Manager from './manager.tab.routes';

const Stack = createStackNavigator();

const AppRoutes = () => {
	return (
		<>
			<StatusBar
				backgroundColor={'transparent'}
				translucent
				barStyle="light-content"
			/>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Manager"
			>
				<Stack.Screen name="Manager" component={Manager} />
			</Stack.Navigator>
		</>
	);
};

export default AppRoutes;
