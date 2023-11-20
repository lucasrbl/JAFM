import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Welcome } from "../screens/Welcome/Welcome";
import { Login } from "../screens/Login/Login";
import { Register } from "../screens/Register/Register";
import { CustomCarousel } from "../screens/Carousel/Carousel";
import { MyTab } from "./RootNavigator";


 type StackParams = {
    Welcome: undefined;
    Register: undefined;
    Login: undefined;
    Tab: undefined;
    Home: undefined;
}

export type StackTypes = StackNavigationProp<StackParams>;

export const MyStack: React.FC = () => {

    
const Stack = createStackNavigator<StackParams>()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={CustomCarousel} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Register" component={Register} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Tab" component={MyTab} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}