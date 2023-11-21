import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react"
import { Reports } from "../screens/Reports/Reports";
import { Profile } from "../screens/Profile/Profile";
import { ReportsForms } from "../screens/ReportsForms/ReportsForms";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


 type TabParams = {
    Reports: undefined;
    Profile: undefined;
    ReportsForms: undefined;
}

export type TabTypes = BottomTabNavigationProp<TabParams>;

export const MyTab: React.FC = () => {

    
const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Relatórios" component={Reports} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="file-chart" size={30} />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: "#d44a4a"
                   },
                
                   tabBarLabelStyle: {
                    fontSize: 12,
                    color: "#161416"},
                }}
                />
            <Tab.Screen name="Gerar Relatórios" component={ReportsForms} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="pencil" size={30} />
                       ),
                    
                       tabBarStyle: {
                        backgroundColor: "#d44a4a"
                       },
                    
                       tabBarLabelStyle: {
                        fontSize: 12,
                        color: "#161416"},
            }}
            />
            <Tab.Screen name="Perfil" component={Profile} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" size={30} />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: "#d44a4a"
                   },
                
                   tabBarLabelStyle: {
                    fontSize: 12,
                    color: "#161416"},
            }}
            />
        </Tab.Navigator>
    )
}