import { View, StyleSheet } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import RNPickerSelect from "react-native-picker-select";


export const Register:React.FC = () => {

  const pickerStyles = {
    inputIOS: styles.pickerInput,
    inputAndroid: styles.pickerInput,
    placeholder: { color: "#868686"},
  };

  return (
  <View style={styles.wrapper}>

    <View style={styles.containerText}>
      <CustomText text="Criar conta" fontWeight="bold" size={20} color="#FFFFFF"/>
      <CustomText text="Preencha o formulário abaixo para criar a conta" color="#868686" />
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
        placeholder="Telefone" 
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
        placeholder="Nome completo" 
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
        placeholder="CPF" 
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

        <View style={styles.gender}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Masculino", key: "Masculino", value: "Masculino" },
            { label: "Feminino", key: "Feminino", value: "Feminino" },
            { label: "Outros", key: "Outros",  value: "Outros"}]}
            placeholder={{ label: "Sexo", value: null}}
            style={pickerStyles} />
        </View>

      <CustomInput 
        height={45} 
        width={340} 
        placeholder="Data de nascimento" 
        placeholderColor="#868686" 
        color="#e9dfdf" 
        border={1} 
        borderColor="#868686" 
        padding={15}
        radius={10}
        />
        <CustomButton title="Criar" border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16}/>
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
      marginTop: 50,
      marginBottom: 30,
      gap: 30
    },

    inputContainer: {
      flex: 6,
      marginBottom: 50,
      gap: 20
    },
    gender: {
      width: 340,
      height: 45,
      borderWidth: 1,
      borderColor: "#868686",
      borderRadius: 10
    },
    pickerInput: {
      borderWidth: 1,
      borderColor: "#868686",
      color: "#868686",
    },
  })
