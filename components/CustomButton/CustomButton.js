import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const CustomButton = props => {
    const styles = StyleSheet.create({
        button: {
            width: props.width,
            height: props.height,
            padding: props.padding,
            borderWidth: props.border,
            borderColor: props.borderColor,
            backgroundColor: props.bgColor,
            borderRadius: props.radius
        },

        buttonText: {
            color: props.color,
            fontSize: props.size,
            fontWeight: props.fontWeight,
            textAlign: 'center'
        }
    })

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}