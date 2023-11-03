import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface Props {
    title: string;
    width: number;
    height?: number
    padding: number;
    border?: number;
    borderColor?: string;
    bgColor?: string;
    radius: number;
    color?: string;
    size?: number;
    fontWeight?: any;
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
    fontWeight
}) => {
    const styles = StyleSheet.create({
        button: {
            width: width,
            height: height,
            padding: padding,
            borderWidth: border,
            borderColor: borderColor,
            backgroundColor: bgColor,
            borderRadius: radius
        },

        buttonText: {
            color: color,
            fontSize: size,
            fontWeight: fontWeight,
            textAlign: 'center'
        }
    })

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}