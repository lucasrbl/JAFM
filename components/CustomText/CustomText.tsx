import { Text, StyleSheet } from "react-native"


interface Props {
    size?: number;
    fontWeight?: any,
    color?: string;
    width?: number;
    text?: string;
}

export const CustomText: React.FC<Props> = ({
    size,
    fontWeight,
    color,
    width,
    text
}) =>{
    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            fontWeight: fontWeight,
            color: color,
            width: width
        }
    })

    return (
        <Text style={styles.text}>
            {text}
        </Text>
    )
}