import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";
import { useAppModals } from "./useAppModals";
import { ImagePickerOptions } from "expo-image-picker";

export const useImage = (pickerOptions: ImagePickerOptions) => {

    const {openCamera, isLoading: cameraIsLoading} = useCamera(pickerOptions);
    const {openGallery, isLoading: galleryIsLoading} = useGallery(pickerOptions);

    const modals = useAppModals();
    const handleSelectImage = () => {
        modals.showSelection({
            title: 'Selecione um avatar',
            message: 'Selecione um avatar para o seu perfil',
            options: [
                {
                    test: 'Galeria',
                    icon: 'images',
                    variant: 'primary',
                    onPress: async () => {
                        const imageUri = await openGallery();
                        console.log(imageUri);
                    },
                },
                {
                    test: 'Camera',
                    icon: 'camera',
                    variant: 'primary',
                    onPress: openCamera,
                }
            ]
        })
    }

    return {
        handleSelectImage,
        isLoading: cameraIsLoading || galleryIsLoading
    }
}