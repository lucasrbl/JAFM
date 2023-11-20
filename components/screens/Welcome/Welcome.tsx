import { StyleSheet, View, Image } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import { CustomButton } from "../../CustomButton/CustomButton"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/AppNavigator"


export const Welcome: React.FC = () => {

    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
        },

        content: {
            flex: 1,
            justifyContent: "flex-end"
        },

        textContainer: {
            alignItems: "center",
            gap: 3,
            marginBottom: 30
        },

        buttonContainer: {
            alignItems: "center",
            gap: 5,
            marginBottom: 30
        },

        image: {
            top: 80,
            left: 5.5
        },

        linearGradient: {
            width: "100%",
            height: "100%"
        },

        button: {
            borderRadius: 8
        }
    })

    const navigation = useNavigation<StackTypes>();


    return (
       <LinearGradient colors={["#F65151", "rgba(0, 0, 0, .95)"]} style={styles.linearGradient}> 
        <View style={styles.wrapper}>
            <Image source={require("../../../assets/tela-inicial.png")} style={styles.image} resizeMode="cover" />
           <View style={styles.content}> 
            <View style={styles.textContainer}>
                <CustomText text="Bem-vindo ao JAFM!" color="#FFFFFF" size={36} fontWeight="bold" />
                <CustomText text="Programa feito para o jovem aprendiz" color="#FFFFFF" fontWeight="bold" />
            </View>

            
                <View style={styles.buttonContainer}>
                    <LinearGradient colors={["#F65151", "#962727"]} style={styles.button}>
                        <CustomButton title="Criar conta" width={300} padding={16} size={16} onPress={() => navigation.navigate("Register")} />
                    </LinearGradient>
                    <CustomButton title="Entrar" color="#FFFFFF" width={300} padding={16} radius={12} size={16} onPress={() => navigation.navigate("Login")}/>
                </View>
            </View>
        </View>
        </LinearGradient>
    )
}