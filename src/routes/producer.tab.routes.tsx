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

const ProducerTab = createBottomTabNavigator()

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

const Producer = () => {

    return (
        <ProducerTab.Navigator
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

            <ProducerTab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    title: 'Início'
                }}
            />

            <ProducerTab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    title: 'Pesquisar'
                }}
            />

            <ProducerTab.Screen
                name='FormScreen'
                component={FormScreen}
                options={{
                    title: ''
                }}
            />

            <ProducerTab.Screen
                name='TaskScreen'
                component={TaskScreen}
                options={{
                    title: 'Tarefas'
                }}
            />

            <ProducerTab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    title: 'Mais'
                }}
            />
        </ProducerTab.Navigator>
    )
}

export default Producer