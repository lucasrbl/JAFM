import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native"

interface Props {
    title: string;
    width: number;
    height?: number
    padding?: number;
    border?: number;
    borderColor?: string;
    bgColor?: string;
    radius?: number;
    color?: string;
    size?: number;
    fontWeight?: any;
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    marginRight?: number;
    onPress?: (event: GestureResponderEvent) => void

}

export const CustomButton:React.FC<Props> = ({
    title,
    width,
    height,
    padding,
    border,
    borderColor,
    bgColor,
    radius,
    color,
    size,
    fontWeight,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
    onPress
}) => {
    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            padding: padding,
            borderWidth: border,
            borderColor: borderColor,
            backgroundColor: bgColor,
            borderRadius: radius,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight
        },

        buttonText: {
            color: color,
            fontSize: size,
            fontWeight: fontWeight,
            textAlign: 'center'
        }
    })

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}