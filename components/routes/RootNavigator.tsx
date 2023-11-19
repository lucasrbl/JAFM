import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react"
import { Reports } from "../screens/Reports/Reports";
import { Profile } from "../screens/Profile/Profile";

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
                headerShown: false
                
            }}/>
            <Tab.Screen name="Register" component={Profile} options={{
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}