import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Welcome } from "../screens/Welcome/Welcome";
import { Login } from "../screens/Login/Login";
import { Register } from "../screens/Register/Register";
/*import { Root } from "../../App";*/


 type StackParams = {
    Welcome: undefined;
    Register: undefined;
    Login: undefined;
    Root: undefined;
}

export type StackTypes = StackNavigationProp<StackParams>;

export const MyStack: React.FC = () => {

    
const Stack = createStackNavigator<StackParams>()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Root" component={Root} /> */}
        </Stack.Navigator>
    )
}