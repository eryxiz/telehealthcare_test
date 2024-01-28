import { create } from "zustand"
import { persist } from "zustand/middleware"
/* export const useUiControls = create((set) => ({
    isCollapseSidebar: false,
    setCollapseSidebar: (val) => set({ isCollapseSidebar: val })
})) */

export const useUiControls = create(
    persist(
        (set) => ({
            isCollapseSidebar: false,
            setCollapseSidebar: (val) => set({ isCollapseSidebar: val })
        }),
        {
            name: 'ui-control'
        }
    )
)