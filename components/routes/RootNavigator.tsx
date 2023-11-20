import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react"
import { Reports } from "../screens/Reports/Reports";
import { Profile } from "../screens/Profile/Profile";

 type TabParams = {
    Reports: undefined;
    Profile: undefined;
}

export type StackTypes = BottomTabNavigationProp<TabParams>;

export const MyTab: React.FC = () => {

    
const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Relatórios" component={Reports} options={{
                headerShown: false
                
            }}/>
            <Tab.Screen name="Perfil" component={Profile} options={{
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}