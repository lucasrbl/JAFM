import { StyleSheet, View, Image } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import { CustomButton } from "../../CustomButton/CustomButton"

export const Welcome: React.FC = () => {
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: "#F65151"
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
        }
    })

    return (
        <View style={styles.wrapper}>
            <Image source={require("../../../assets/tela-inicial.png")}
                   height={500}
                   width={1000} />
           <View style={styles.content}> 
            <View style={styles.textContainer}>
                <CustomText text="Bem-vindo ao JAFM!" color="#FFFFFF" size={36} fontWeight="bold" />
                <CustomText text="Programa feito para o jovem aprendiz" color="#FFFFFF" fontWeight="bold" />
            </View>

            
                <View style={styles.buttonContainer}>
                    <CustomButton title="Criar conta" bgColor="#B32222" width={300} padding={16} radius={12} size={16} />
                    <CustomButton title="Entrar" border={1} color="#FFFFFF" width={300} padding={16} radius={12} size={16}/>
                </View>
            </View>
        </View>
    )
}