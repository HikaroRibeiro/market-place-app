import { ImagePickerOptions } from "expo-image-picker"
import { useCallback, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Toast } from "toastify-react-native";

export const useGallery = (pickerOptions:ImagePickerOptions) => {

    const [isLoading, setIsLoading] = useState(false);

    const requestGalleryPermission = useCallback(async (): Promise<boolean> => {
        try {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

            const currentStatus = status === "granted"; 

            if(!currentStatus) {
                Toast.error("É necessário permitir o acesso à galeria", "top");
            };

            return currentStatus;

        } catch (error) {
            Toast.error("Erro ao solicitar permissões da galeria", "top");
            return false;
        }
    },[])

    const openGallery = useCallback(async (): Promise<string | null> => {
        setIsLoading(true);
        try {
            const hasPermission = await requestGalleryPermission();

            if(!hasPermission) {
                return null;
            }

            const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

            // TODO: Verificar se o usuário cancelou a seleção
            if(!result.canceled && result.assets.length > 0) {
                Toast.success("Imagem selecionada com sucesso", "top");
                return result.assets[0].uri;
            }

            return null;

        } catch (error) {
            Toast.error("Erro ao abrir galeria", "top");
            return null;
        } finally {
            setIsLoading(false);
        }
    },[])

    return {
        openGallery,
        isLoading
    }
}