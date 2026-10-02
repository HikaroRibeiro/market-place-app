import { 
    View, 
    Text, 
    TextInputProps, 
    Pressable, 
    TextInput, 
    TouchableOpacity } from "react-native";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { useAppInputviewModel } from "./useAppInputViewModel";

interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string,
    leftIcon?: keyof typeof Ionicons.glyphMap,
    rightIcon?: keyof typeof Ionicons.glyphMap,
    containerClassName?: string,
    mask?: (value: string) => void | string
    error?: string
}

export const AppInput: FC<AppInputProps> = ({
     label, 
     leftIcon, 
     rightIcon, 
     containerClassName,
     className,
     value,
     isError,
     secureTextEntry = false,
     onBlur,
     onFocus,
     onChangeText,
     mask,
     error,
     isDisabled,
     ...textInputProps
}) => {

    const {
        getIconColor,
        handleWrapperPress,
        handlePasswordToggle,
        handleFocus,
        handleBlur,
        showPassword
    } = useAppInputviewModel({
        error,
        isError: !!error,
        secureTextEntry,
        onFocus,
        onBlur,
        mask,
        onChangeText,
        isDisabled,
        value
    })

    const styles = appInputVariants()

    return (
        <View className={styles.container({className: containerClassName})}>
            <Text className={styles.label()}>Label</Text>
            <Pressable className={styles.wrapper()}>

                <Ionicons name="person" size={22} color="black" />

                <TextInput className={styles.input({isFocused: true})} {...textInputProps} />

                <TouchableOpacity>
                    <Ionicons name="eye-off-outline" size={22} color="black" />
                </TouchableOpacity>

            </Pressable>
        </View>
    );
}