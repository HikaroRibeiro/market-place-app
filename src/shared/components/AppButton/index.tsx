import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from "react-native"
import { appButtonVariants, AppButtonVariantsProps } from "./button.variants";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps, AppButtonVariantsProps {
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    children: string | React.ReactNode;
}

export const AppButton: FC<AppButtonProps> = ({ 
    leftIcon,
    rightIcon, 
    children,
    variant = "filled",
    isLoading,
    isDisabled,
    className, 
    ...rest}) => {

    const styles = appButtonVariants({
        variant,
        hasIcon: !!leftIcon || !!rightIcon,
        isLoading,
        isDisabled
    });

    const contentColor = variant === "filled" ? "white" : colors["purple-base"]

    const renderContent = () => {
        if (isLoading) {
            return (
                <ActivityIndicator 
                    size="small" 
                    color={contentColor} />
            )
        } 

        return (
            <>
                {leftIcon && <Ionicons name={leftIcon} size={20} color={contentColor} />}

                <Text className={styles.text()}>
                    {children}
                </Text>

                {rightIcon && <Ionicons name={rightIcon} size={20} color={contentColor} />}

            </>
        )

 
    }

    return (
        <TouchableOpacity className={styles.base({className})} {...rest} >
            {renderContent()}
        </TouchableOpacity>
    )
}