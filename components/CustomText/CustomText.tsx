import { Text, StyleSheet } from "react-native"


interface Props {
    size?: number;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    color?: string;
    width?: number;
    text?: string;
    border?: number;
}




export const CustomText: React.FC<Props> = ({
    size,
    fontWeight,
    color,
    width,
    text,
    border
}) =>{
    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            fontWeight: fontWeight,
            color: color,
            width: width,
            borderWidth: border
        }
    })

    return (
        <Text style={styles.text}>
            {text}
        </Text>
    )
}