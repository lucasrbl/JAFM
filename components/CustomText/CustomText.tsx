import { Text, StyleSheet, GestureResponderEvent } from "react-native"


interface Props {
    size?: number;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    color?: string;
    width?: number;
    text?: string;
    border?: number;
    onPress?: (event: GestureResponderEvent) => void
    marginTop?: number;
    backgroundColor?: string;
    padding?: number;
    radius?: number;
}




export const CustomText: React.FC<Props> = ({
    size,
    fontWeight,
    color,
    width,
    text,
    border,
    onPress,
    marginTop,
    backgroundColor,
    padding,
    radius
}) =>{
    const styles = StyleSheet.create({
        text: {
            fontSize: size,
            fontWeight: fontWeight,
            color: color,
            width: width,
            borderWidth: border,
            marginTop: marginTop,
            backgroundColor: backgroundColor,
            padding: padding,
            borderRadius: radius
        }
    })

    return (
        <Text style={styles.text} onPress={onPress}>
            {text}
        </Text>
    )
}