import { create } from 'zustand'

export const useStore = create((set) => ({
    tableModalOpen: false
}))