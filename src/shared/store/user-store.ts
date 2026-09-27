
import { create } from "zustand";
import { UserInterface } from "../interfaces/user";

import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SetSessionParms {
    user: UserInterface;
    token: string;
    refreshToken: string;
}

interface UpdateTokensParms {
    token: string;
    refreshToken: string;
}

export interface UserStore {
    user: UserInterface | null;
    token: string | null;
    refreshToken: string | null;

    setSession: (sessionData: SetSessionParms) => void;
    logout: () => void;
    updateTokens: (updateTokensData: UpdateTokensParms) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            refreshToken: null,
    
            logout: () => 
                set({ 
                    user: null, 
                    token: null, 
                    refreshToken: null 
                }),
            setSession: (sessionData) => set({ ...sessionData}),
            updateTokens: (updateTokensData) => set({ ...updateTokensData}),
        }), {
                name: 'marketplace-auth',
                storage: createJSONStorage(() => AsyncStorage),
        })
)
;