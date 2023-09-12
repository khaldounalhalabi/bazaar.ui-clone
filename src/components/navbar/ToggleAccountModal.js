import {create} from "zustand";

export const useToggleAccountModal = create((set) => ({
    open: false,
    toggle: () => set((state) => ({open: !state.open}))
}));