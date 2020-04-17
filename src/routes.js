import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Employees from './pages/Employees';
import Home from './pages/Home';
import Pendencies from './pages/Pendencies';
import Settings from './pages/Settings';
import Preload from './pages/Preload';
import theme from "./themes/default";
import {styles} from "./components/FormLogin/styles";
import Profile from "./pages/Profile";

const Stack = createStackNavigator();
const EmployeeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function bottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: true,
                inactiveTintColor: `${theme.colors.ahg_waterloo_lighten1}`,
                activeTintColor: theme.colors.ahg_cyan_base,
                style: {
                    borderTopColor: theme.colors.ahg_gray_darken1,
                    backgroundColor: theme.colors.ahg_gray_lighten5
                }
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="home" size={24} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Employees"
              component={employeeStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="people" size={24} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Pendencies"
              component={Pendencies}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="chat-bubble" size={24} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="settings" size={24} color={color} />
                )
              }}
            />
        </Tab.Navigator>
    );
}

function employeeStack() {

  return (
    <EmployeeStack.Navigator initialRouteName="Employees">
      <EmployeeStack.Screen
        name="Employees"
        component={Employees}
        options={{ headerShown: false }}
      />
      <EmployeeStack.Screen
        name="Profile"
        component={Profile}
      />
    </EmployeeStack.Navigator>
  );
}

function Routes() {

    const forFade = ({ current, closing }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Preload">
                <Stack.Screen
                    name="Preload"
                    component={Preload}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                        cardStyleInterpolator: forFade
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={bottomRoutes}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
