import { View, StyleSheet } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";


export const Login:React.FC = () => {

  return (
  <View style={styles.wrapper}>
        <View style={styles.containerText}>
            <CustomText text="Entrar" fontWeight="bold" size={20} color="#FFFFFF"/>
            <CustomText text="Bem-vindo!" color="#FFFFFF" />
            </View>

            <View style={styles.inputContainer}>
            <CustomInput 
                height={45} 
                width={340} 
                placeholder="Email" 
                placeholderColor="#868686" 
                color="#e9dfdf" 
                border={1} 
                borderColor="#868686" 
                padding={15}
                radius={10}
                />
            
            <CustomInput 
                height={45} 
                width={340} 
                placeholder="Senha" 
                placeholderColor="#868686" 
                color="#e9dfdf" 
                border={1} 
                borderColor="#868686"
                padding={15}
                radius={10}
                />
                <CustomButton title="Entrar" border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16} marginTop={30}/>
                <CustomButton title="Esqueceu a senha?" border={1} color="#77767E" width={340} padding={16} radius={12} size={16}/>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({

    wrapper: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
    },

    containerText: {
      flex: 1,
      alignItems: "center",
      marginTop: 100,
      gap: 50
    },

    inputContainer: {
      flex: 3,
      gap: 20
    },

  })
