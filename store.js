"use client"

import { create } from 'zustand'

export const useStore = create((set) => ({
    tableModalOpen: false,
    AddExpenseModalOpen: false,
    UpdateExpenseModalOpen: false,
    expenseData: null
}))