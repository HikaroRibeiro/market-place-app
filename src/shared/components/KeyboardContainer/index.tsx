import { FC, PropsWithChildren } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface KeyboardContainerProps {
    children: React.ReactNode
}
export const KeyboardContainer: FC<PropsWithChildren<KeyboardContainerProps>> = ({children}) => {
    return (
        <SafeAreaView className="flex-1">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"} 
                    className="flex-1">
                        <View className="flex-1">
                            {children}
                        </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}