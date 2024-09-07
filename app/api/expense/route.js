import { NextResponse } from "next/server";
import prisma from "../auth/utils/db";
import { getToken } from "next-auth/jwt";
import { addExpenseSchemaServer } from "@/schema/schema";
import { z } from "zod";

const createExpense = async (payload, id) => {
    try {
        const { description, amount, date, currency } = payload

        const data = {
            title: description,
            amount,
            expense_date: date,
            currency_code: currency,
            userId: id
        }
        const addExpense = await prisma.expenses.create({
            data
        })
        // console.log("addExpense", addExpense);
    } catch (error) {
        throw new Error(error)
    }
}

const auth = async (req) => {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ Error: "Unauthorized!" }, { status: 401 })
    return token
}

export async function POST(req, res) {
    try {
        const token = await auth(req)

        const data = await req.json()
        const validation = await addExpenseSchemaServer.parse(data);
        const userId = token.sub

        await createExpense(data, userId)

        return NextResponse.json({ Message: "Successfully added your record!" }, { status: 201 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle validation errors
            return NextResponse.json({ error: "Invalid request data", details: error.errors }, { status: 400 })
        }
        // Handle other errors
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

// export async function GET(req, res) {
//     const token = await getToken({ req })
//     if (!token) return NextResponse.json({ Error: "Unauthorized!" }, { status: 401 })

//     const userId = token.sub

//     return NextResponse.json({ Message: "Method not allowed" }, { status: 405 })

// }
