import { z } from "zod"

export const addExpenseSchema = z.object({
    description: z.string()
        .min(2, { message: "Description must be at least 2 characters long." })
        .max(125, { message: "Description must not exceed 125 characters." }),
    amount: z.string()
        .refine((val) => val !== "", { message: "Enter the amount" }) // Checks if the string is not empty
        .refine((val) => !isNaN(parseFloat(val)) && isFinite(val), { message: "Enter number only" }),
    currency: z.string().regex(/^(INR|USD)$/, { message: "Invalid currency code." }),
    date: z.date({
        required_error: "A date is required.",
    }),
});

export const addExpenseSchemaServer = z.object({
    description: z.string()
        .min(2, { message: "Description must be at least 2 characters long." })
        .max(125, { message: "Description must not exceed 125 characters." }),
    amount: z.string()
        .refine((val) => val !== "", { message: "Enter the amount" }) // Checks if the string is not empty
        .refine((val) => !isNaN(parseFloat(val)) && isFinite(val), { message: "Enter number only" }),
    currency: z.string().regex(/^(INR|USD)$/, { message: "Invalid currency code." }),
    date: z.string({
        required_error: "A date is required.",
    }),
});