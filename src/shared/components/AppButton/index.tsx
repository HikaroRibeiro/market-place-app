import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native"
import { appButtonVariants, AppButtonVariantsProps } from "./button.variants";
import { Children, FC } from "react";

interface AppButtonProps extends TouchableOpacityProps, AppButtonVariantsProps {

}

export const AppButton: FC<AppButtonProps> = ({...rest}) => {

    const styles = appButtonVariants();

    return (
        <TouchableOpacity className={styles.base()} {...rest}  >
            <Text className="text-sky-700 font-bold text-center text-lg">
                    {Children.toArray(rest.children)}
            </Text>
        </TouchableOpacity>
    )
}