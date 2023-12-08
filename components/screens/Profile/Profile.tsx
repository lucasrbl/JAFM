import React from "react"
import { View, StyleSheet } from "react-native"
import { CustomButton } from "../../CustomButton/CustomButton"
import { CustomText } from "../../CustomText/CustomText"
import { useNavigation} from "@react-navigation/core"
import { StackTypes } from "../../routes/AppNavigator"

export const Profile: React.FC = () => {
    const navigation = useNavigation<StackTypes>()

    

    return (
       <View style={styles.wrapper}>
      <View>
        <View style={styles.titleContainer}>
            <CustomText text="Perfil" fontWeight="bold" size={34} color="#FFFFFF" />
        </View>
        <View style={styles.userContainer}>
            <CustomText text="Informações de Usuário" color="#FFFFFF" size={26} fontWeight="bold" />
        </View>
        <View style={styles.statsContainer}>
            <View>
                <CustomText text="12" size={22} color="#7B4296" />
                <CustomText text="Certificados emitidos" color="#FFFFFF" size={15} width={110}/>
            </View>

            <View>
                <CustomText text="20" color="#7B4296" size={22} />
                <CustomText text="Projetos concluídos" color="#FFFFFF" size={15} width={100} />
            </View>

            <View>
                <CustomText text="12" color="#7B4296" size={22} />
                <CustomText text="Check-in de presença" color="#FFFFFF" size={15} width={110} />
            </View>
        </View>
       </View>

        <View style={styles.roundedLine} />

        <View style={styles.configContainer}> 
            <CustomText text="Configurações" color="#FFFFFF" size={22} />
            <View style={styles.buttonContainer}>
                <CustomButton title="Deslogar" width={340} color="#FFFFFF" bgColor="#FF3B30" padding={15} radius={8} onPress={() => navigation.navigate("Home")}  />
            </View> 
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#161416",
        flex: 1,
        justifyContent: "space-around"
    },

    titleContainer: {
        paddingTop: 60,
        paddingLeft: 15
    },

    userContainer: {
        alignSelf: "center",
        marginTop: 70,
        gap: 15
    },

    statsContainer: {
        flexDirection: "row",
        gap: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 35
    },

    roundedLine: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#77767E",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    
    configContainer: {
        bottom: 100,
        marginLeft: 10
    },

    buttonContainer: {
        marginTop: 20,
        gap: 10,
        alignItems: "center"
    },

    passwordContainer: {
        marginTop: 60,
        gap: 10
    }
})