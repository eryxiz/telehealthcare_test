import { create } from "zustand"

export const useUiControls = create((set) => ({
    isCollapseSidebar: false,
    setCollapseSidebar: (val) => set({ isCollapseSidebar: val })
}))