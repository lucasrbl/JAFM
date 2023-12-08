import React from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import { CustomButton } from "../../CustomButton/CustomButton"
import { CustomText } from "../../CustomText/CustomText"
import { useNavigation } from "@react-navigation/core"
import { StackTypes } from "../../routes/AppNavigator"
import { MaterialIcons } from '@expo/vector-icons';

export const Profile: React.FC = () => {
    const navigation = useNavigation<StackTypes>()



    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <CustomText text="Perfil" fontWeight="bold" size={34} color="#FFFFFF" />
                    </View>
                    <View style={styles.userContainer}>
                        <View style={styles.ImgProfile}>

                        </View>
                        <CustomText text="Usuário 1" color="#FFFFFF" size={26} fontWeight="bold" />
                        <CustomText text="usuario@email.br" color="rgba(154, 153, 162, 1)" textAlign="center" size={12} />
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.BigNumber}>
                            <CustomText text="12" size={22} color="#7B4296" />
                            <CustomText text="Certificados emitidos" color="#FFFFFF" textAlign="center" size={15} width={110} />
                        </View>

                        <View style={styles.BigNumber}>
                            <CustomText text="20" color="#7B4296" size={22} />
                            <CustomText text="Projetos concluídos" color="#FFFFFF" textAlign="center" size={15} width={100} />
                        </View>

                        <View style={styles.BigNumber}>
                            <CustomText text="12" color="#7B4296" size={22} />
                            <CustomText text="Check-in de presença" color="#FFFFFF" textAlign="center" size={15} width={110} />
                        </View>
                    </View>


                    <View style={styles.roundedLine} />

                    <View style={styles.configContainer}>
                        <CustomText text="Configurações" color="#FFFFFF" fontWeight="bold" size={22} />
                        <View style={styles.ContainerButton}>
                            <CustomText text="Termos de uso" color="#FFFFFF" size={16} />

                            <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
                        </View>
                        <CustomText text="Conta" color="#FFFFFF" fontWeight="bold" size={20} width={110} />
                        <View style={styles.ContainerButton}>
                            <CustomText text="Alterar Senha" color="#FFFFFF" size={16} />

                            <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
                        </View>
                        <View style={styles.ContainerButton}>
                            <CustomText text="Excluir conta" color="#FF3B30" size={16} />

                            <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton title="Deslogar" width={340} color="#FFFFFF" bgColor="#FF3B30" padding={15} radius={8} onPress={() => navigation.navigate("Home")} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
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
        marginTop: 30,
        gap: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    statsContainer: {
        flexDirection: "row",
        gap: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 35,
        marginBottom: 30
    },

    roundedLine: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#77767E",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    configContainer: {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 18
    },

    buttonContainer: {
        marginTop: 20,
        gap: 10,
        alignItems: "center"
    },

    passwordContainer: {
        marginTop: 60,
        gap: 10
    },
    BigNumber: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    ContainerButton: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 8
    },
    ImgProfile: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "rgba(123, 66, 150, 1)"
    },
    container: {
        width: "100%",
        height: "100%",
        marginBottom: 80
    }
})