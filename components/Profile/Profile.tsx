import React from "react"
import { View, StyleSheet } from "react-native"
import { CustomButton } from "../CustomButton/CustomButton"
import { CustomText } from "../CustomText/CustomText"

export const Profile: React.FC = () => {
    return (
       <View style={styles.wrapper}>

        <View>
            <CustomText text="Perfil" fontWeight="bold" size={34} color="#FFFFFF" />
        </View>
       </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#161416"
    }
})