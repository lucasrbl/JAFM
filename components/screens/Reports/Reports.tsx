import React from "react"
import { CustomText } from "../../CustomText/CustomText"
import { View, StyleSheet, Image } from "react-native"
import { CustomButton } from "../../CustomButton/CustomButton"
import { LinearGradient } from "expo-linear-gradient"



export const Reports: React.FC = () => {
    return (
        <View style={styles.wrapper}>
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <CustomText text="Relatórios" fontWeight="bold" color="#FFFFFF" size={34} />
                    </View>
                        <Image source={require("../../../assets/icone-relatorio.png")} style={styles.image} />
                        <CustomText text="Nenhum relatório" color="#FFFFFF" size={34} fontWeight="bold" />
                        <CustomText text="Você ainda não gerou nenhum relatório de desempenho individual" size={17} color="#9A99A2" />
                </View>


           <View style={styles.buttonContainer}>
            <LinearGradient colors={["#F65151", "#A33333"]} style={styles.button}>
                 <CustomButton title="Gerar Relatório" width={300} padding={16} size={16} color="#FFFFFF"/>
            </LinearGradient>
           </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center"
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },

    image: {
        width: 400,
        height: 100
    },

    button: {
        width: 300,
        alignSelf: "center",
        borderRadius: 8
    },
    
    buttonContainer: {
        alignSelf: "center",
        position: "absolute",
        bottom: 150
    },

    titleContainer: {
        alignSelf: "flex-start",
        paddingLeft: 10,
        bottom: 150
    }
})