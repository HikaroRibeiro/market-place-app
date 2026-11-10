import { View, Text, TouchableOpacity } from "react-native";
import { SelectionOption } from "../../../hooks/useAppModals";
import { FC } from "react";

export interface SelectionModalProps {
    title: string;
    message?: string;
    options: SelectionOption[];
}

export const SelectionModal: FC<SelectionModalProps> = ({
    title,
    message,
    options
}) => {
    return (
        <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6">
            
            <Text>{title}</Text>

            {message && <Text>{message}</Text>}

            <View>
                {options.map((option) => (
                    <TouchableOpacity key={option.test} onPress={option.onPress}>
                        <Text>{option.test}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}