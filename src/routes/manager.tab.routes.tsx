import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/ManagerScreen/HomeScreen';
import SearchScreen from '../screens/ManagerScreen/SearchScreen';
import FormScreen from '../screens/ManagerScreen/FormScreen';
import TaskScreen from '../screens/ManagerScreen/TaskScreen';
import SettingsScreen from '../screens/ManagerScreen/SettingsScreen';
import FormButton from '../components/Buttons/FormButton';
import { colors } from '../styles/theme.json'

const ManagerTab = createBottomTabNavigator()

const icons = {
    HomeScreen: {
        lib: MaterialCommunityIcons,
        name: 'home'
    },
    SearchScreen: {
        lib: MaterialCommunityIcons,
        name: 'magnify'
    },
    TaskScreen: {
        lib: MaterialCommunityIcons,
        name: 'calendar-month'
    },
    SettingsScreen: {
        lib: MaterialCommunityIcons,
        name: 'dots-vertical'
    },

}

const Manager = () => {

    return (
        <ManagerTab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.light,
                tabBarInactiveTintColor: colors.muted,
                // tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    height: 60,
                    paddingBottom: 5,
                },
                tabBarIcon: ({ color, focused }) => {
                    if (route.name === 'FormScreen') {
                        return (
                            <FormButton
                                onPress={() => navigation.navigate('FormScreen')}
                                focused={focused}
                            />
                        )
                    }
                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} color={color} size={28} />
                }
            })}
        >

            <ManagerTab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    title: 'Início'
                }}
            />

            <ManagerTab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    title: 'Pesquisar'
                }}
            />

            <ManagerTab.Screen
                name='FormScreen'
                component={FormScreen}
                options={{
                    title: ''
                }}
            />

            <ManagerTab.Screen
                name='TaskScreen'
                component={TaskScreen}
                options={{
                    title: 'Tarefas'
                }}
            />

            <ManagerTab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    title: 'Mais'
                }}
            />
        </ManagerTab.Navigator>
    )
}

export default Manager