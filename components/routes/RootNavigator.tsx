import { createBottomTabNavigator, BottomTabNavigationProp, BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react"
import { Reports } from "../screens/Reports/Reports";
import { Profile } from "../screens/Profile/Profile";
import { ReportsForms } from "../screens/ReportsForms/ReportsForms";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../assets/colors";
import { CustomText } from "../CustomText/CustomText";


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

                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="file-chart" size={30} color={focused ? colors.yellowColor : colors.lightGreyColor} />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: colors.greyColor,
                    borderColor: colors.darkGreyColor,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    overflow: "hidden",
                    position: "absolute"
                   },
                
                   tabBarLabel: ({ focused }) => {
                    return <CustomText text="Relatórios" size={12} color={focused ? colors.yellowColor : colors.lightGreyColor} />
                  },
                }}
                />
            <Tab.Screen name="Gerar Relatórios" component={ReportsForms} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="pencil" size={30} color={focused ? colors.yellowColor : colors.lightGreyColor} />
                       ),
                    
                       tabBarStyle: {
                        backgroundColor: colors.greyColor,
                        borderColor: colors.darkGreyColor,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: "hidden",
                        position: "absolute"
                       },

                       tabBarLabel: ({ focused }) => {
                        return <CustomText text="Gerar Relatórios" size={12} color={focused ? colors.yellowColor : colors.lightGreyColor} />
                       },
            }}
            />
            <Tab.Screen name="Perfil" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="account" size={30} color={focused ? colors.yellowColor : colors.lightGreyColor}  />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: colors.greyColor,
                    borderColor: colors.darkGreyColor,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    overflow: "hidden",
                    position: "absolute"
                   },
                
                   tabBarLabel: ({ focused }) => {
                    return <CustomText text="Perfil" size={12} color={focused ? colors.yellowColor : colors.lightGreyColor} />
                   },
            }}
            />
        </Tab.Navigator>
    )
}