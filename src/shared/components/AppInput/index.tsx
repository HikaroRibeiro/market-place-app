import { View } from "react-native";
import { appInputVariants } from "./input.variants";
import { Pressable, TextInput, Touchable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AppInput = () => {

    const styles = appInputVariants()

    return (
        <View>
            <Pressable>

                <Ionicons name="person" size={24} color="black" />

                <TextInput />

                <TouchableOpacity>
                    <Ionicons name="eye-off-outline" size={24} color="black" />
                </TouchableOpacity>

            </Pressable>
        </View>
    );
}