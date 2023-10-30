import { Text, StyleSheet } from "react-native"

export const CustomText = props => {
    const styles = StyleSheet.create({
        text: {
            fontSize: props.size,
            fontWeight: props.fontWeight,
            color: props.color,
            width: props.width
        }
    })

    return (
        <Text style={styles.text}>
            {props.text}
        </Text>
    )
}