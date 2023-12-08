import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Welcome } from "../screens/Welcome/Welcome";
import { Login } from "../screens/Login/Login";
import { Register } from "../screens/Register/Register";
import { CustomCarousel } from "../screens/Carousel/Carousel";
import { MyTab } from "./RootNavigator";
import { ReportsForms } from "../screens/ReportsForms/ReportsForms";
import { ReportsPerformance } from "../screens/ReportsPerformance/ReportsPerformance";

type StackParams = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  Tab: undefined;
  Home: undefined;
  ReportsForms: undefined;
  LoggedTab: undefined;
  ReportsPerformance: { nome: string };
}

export type StackTypes = StackNavigationProp<StackParams>;

export const MyStack: React.FC = () => {
  const Stack = createStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CustomCarousel} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTitle: 'Criar conta',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTitle: 'Entrar',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name="Tab" component={LoggedStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const LoggedStack: React.FC = () => {
  const Stack = createStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoggedTab" component={MyTab} options={{ headerShown: false }} />
      <Stack.Screen name="ReportsForms" component={ReportsForms} options={{ headerShown: false }} />
      <Stack.Screen name="ReportsPerformance" component={ReportsPerformance} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
