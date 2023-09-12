import {create} from "zustand";

export const useToggleSidebar = create((set) => ({
    open: false,
    toggle: () => set((state) => ({open: !state.open}))
}));