import { useState } from "react";

export const useRegisterViewModels = () => {

    const [userData, setUserData] = useState({
        name: 'Hikaro',
        email: 'hikaro@email.com'
    });

    return {
        userData,
        setUserData
    }
}