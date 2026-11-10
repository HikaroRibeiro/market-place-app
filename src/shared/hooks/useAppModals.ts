import { Ionicons } from "@expo/vector-icons";
import { useModalStore } from "../store/modal-store";
import { SelectionModal, SelectionModalProps } from "../components/Modals/SelectionModal";
import { createElement } from "react";

export interface SelectionOption {
    test: string;
    onPress: () => void;
    icon?: keyof typeof Ionicons.glyphMap;
    variant?: "primary" | "secondary" | "danger";
}
export const useAppModals = () => {
    const { open, close } = useModalStore();

    const showSelection = ({
        title,
        message,
        options
    }:{ 
        title: string
        message?: string
        options: SelectionOption[]
    }) => {
        open(createElement(SelectionModal, {
            options,
            title,
            message
        } as SelectionModalProps));
    }

    return {
        showSelection
    }
}