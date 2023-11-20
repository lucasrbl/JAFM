import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { CustomButton } from "../../CustomButton/CustomButton"
import { CustomText } from "../../CustomText/CustomText"
import { CustomInput } from "../../CustomInput/CustomInput"
import { useNavigation, useIsFocused } from "@react-navigation/core"

export const Profile: React.FC = () => {
    const [passwordChange, setPasswordChange] = useState(false);
    const navigation = useNavigation()
    const isFocused = useIsFocused();

    const handlePasswordChange = () => {
        setPasswordChange(!passwordChange)
    }

    useEffect(() => {
       if(isFocused) {
        setPasswordChange(false)
       }
    },[isFocused])

    return (
       <View style={styles.wrapper}>
      <View>
        <View style={styles.titleContainer}>
            <CustomText text="Perfil" fontWeight="bold" size={34} color="#FFFFFF" />
        </View>
        <View style={styles.userContainer}>
            <CustomText text="Usuário 1" color="#FFFFFF" size={26} fontWeight="bold" />
            <CustomText text="usuario@email.com" color="#9A99A2" size={16} />
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
        {!passwordChange && (
            <>
            <CustomText text="Configurações" color="#FFFFFF" size={22} />
            <View style={styles.buttonContainer}>
                <CustomButton title="Excluir conta" width={340} color="#FF3B30"  />
                <CustomButton title="Alterar senha" width={340} color="#FFFFFF" onPress={handlePasswordChange} />
            </View>
            </>
        )}
                { passwordChange ? (
                <View style={styles.passwordContainer}>
                    <CustomText text="Senha atual:" color="#FFFFFF"/>
                    <CustomInput 
                     height={45} 
                     width={340} 
                     placeholder="Digite a sua senha atual:" 
                     placeholderColor="#868686" 
                     color="#e9dfdf" 
                     border={1} 
                     borderColor="#868686"
                     padding={15}
                     radius={10} />

                    <CustomText text="Nova senha:" color="#FFFFFF" />
                    <CustomInput
                     height={45} 
                     width={340} 
                     placeholder="Digite a nova senha" 
                     placeholderColor="#868686" 
                     color="#e9dfdf" 
                     border={1} 
                     borderColor="#868686"
                     padding={15}
                     radius={10}/>

                <CustomButton title="Atualizar senha" border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16} onPress={handlePasswordChange}/>
                </View>
                ): null}
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
        marginTop: 10,
        gap: 10
    },

    passwordContainer: {
        marginTop: 60,
        gap: 10
    }
})