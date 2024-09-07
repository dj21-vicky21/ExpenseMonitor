import { NextResponse } from "next/server";
import prisma from "../../auth/utils/db";
import { getToken } from "next-auth/jwt";
import { addExpenseSchemaServer } from "@/schema/schema";
import { z } from "zod";

const auth = async (req) => {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorized!" }, { status: 401 })
    return token
}

const updateExpense = async (payload, id) => {
    try {
        const { description, amount, date, currency } = payload

        const data = {
            title: description,
            amount,
            expense_date: date,
            currency_code: currency,
        }

        const updateExpense = await prisma.expenses.update({
            where: {
                id
            },
            data: data
        })
        console.log("🚀 ~ updateExpense ~ updateExpense:", updateExpense)
        // console.log("addExpense", addExpense);
    } catch (error) {
        console.error(error)
        throw error
    }
}

const deleteExpense = async (id) => {
    try {
        const deletExpense = await prisma.expenses.delete({
            where: {
                id
            }
        })
        console.log("🚀 ~ deleteExpense ~ deletExpense:", deletExpense)
        // console.log("addExpense", addExpense);
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export async function PUT(req, context) {
    const { params } = context
    console.log("🚀 ~ PUT ~ params:", params)
    try {
        const token = await auth(req)
        const userId = token.sub

        if (!userId) return NextResponse.json({ message: "Unauthorized!" }, { status: 401 })

        const data = await req.json()
        console.log("🚀 ~ PUT ~ data:", data)
        const validation = await addExpenseSchemaServer.parse(data);

        await updateExpense(data, params.id)

        return NextResponse.json({ Message: "Successfully record updated!" }, { status: 200 })
    } catch (error) {
        console.log("🚀 ~ PUT ~ error:", error)
        if (error instanceof z.ZodError) {
            // Handle validation errors
            return NextResponse.json({ error: "Invalid request data", details: error.errors }, { status: 400 })
        }
        // Handle other errors
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function DELETE(req, context) {
    const { params } = context
    try {
        const token = await auth(req)
        const userId = token.sub
        console.log("🚀 ~ DELETE ~ userId:", userId)

        if (!userId) return NextResponse.json({ message: "Unauthorized!" }, { status: 401 })

        await deleteExpense(params.id)

        return NextResponse.json({ Message: "Successfully record deleted!" }, { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle validation errors
            return NextResponse.json({ error: "Invalid request data", details: error.errors }, { status: 400 })
        }
        // Handle other errors
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

