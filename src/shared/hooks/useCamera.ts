import * as ImagePicker from "expo-image-picker";
import { ImagePickerOptions } from "expo-image-picker";
import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";


export const useCamera = (cameraPickerOptions: ImagePickerOptions) => {

    const [isLoading, setIsLoading] = useState(false);

    const requestCameraPermission = useCallback(async (): Promise<boolean> => {
        try {
            const {status} = await ImagePicker.requestCameraPermissionsAsync();

            const currentStatus = status === "granted";

            if(!currentStatus) {
                Toast.error("É necessário permitir o acesso à câmera", "top");
            };

            return currentStatus;

        } catch (error) {
            Toast.error("Erro ao solicitar permissões da câmera", "top");
            return false;
        }
    },[])

    const openCamera = useCallback(async (): Promise<string | null> => {
        setIsLoading(true);
        try {
            const hasPermission = await requestCameraPermission();

            if(!hasPermission) return null;

            const result = await ImagePicker.launchCameraAsync(cameraPickerOptions);

            if(!result.canceled && result.assets && result.assets.length > 0){ 
                Toast.success("Imagem capturada com sucesso", "top");
                return result.assets[0].uri;
            }

            return null;

        }catch (error) {
            Toast.error("Não foi possível abrir a câmera", "top");
            return null;
        }finally {
            setIsLoading(false);
        }

    },[])

    return {
        isLoading,
        requestCameraPermission,
        openCamera
    }
}