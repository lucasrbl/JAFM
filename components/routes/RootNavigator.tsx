import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react"
import { Reports } from "../screens/Reports/Reports";

 type TabParams = {
    Welcome: undefined;
    Register: undefined;
    Login: undefined;
}

export type StackTypes = BottomTabNavigationProp<TabParams>;

export const MyTab: React.FC = () => {

    
const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Reports" component={Reports} options={{
                headerShown: false,
                
            }}/>
            {/* <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Root" component={Root} /> */}
        </Tab.Navigator>
    )
}