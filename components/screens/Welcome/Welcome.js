import { StyleSheet, View } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import { CustomButton } from "../../CustomButton/CustomButton"

export const Welcome = () => {
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: 'red'
        },

        content: {
            flex: 1,
            justifyContent: 'flex-end'
        },

        textContainer: {
            alignItems: 'center',
            gap: 3,
            marginBottom: 30
        },

        buttonContainer: {
            alignItems: 'center',
            gap: 5,
            marginBottom: 30
        }
    })

    return (
        <View style={styles.wrapper}>
           <View style={styles.content}> 
            <View style={styles.textContainer}>
                <CustomText text='Bem-vindo ao JAFM!' color='white' size={36} fontWeight='bold' />
                <CustomText text='Programa feito para o jovem aprendiz' color='white' fontWeight='bold' />
            </View>

            
                <View style={styles.buttonContainer}>
                    <CustomButton title='Criar conta' bgColor='blue' width={300} padding={16} radius={12} size={16} />
                    <CustomButton title='Entrar' border={1} color='white' width={300} padding={16} radius={12} size={16}/>
                </View>
            </View>
        </View>
    )
}