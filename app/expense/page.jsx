import { Button } from '@/components/ui/button'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './column'
import AddExpense from '@/components/addExpense'
import prisma from '../api/auth/utils/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/utils/authOptions'


const Expense = async () => {

  const session = await getServerSession(authOptions)

  const getExpense = async () => {
    const data = await prisma.expenses.findMany({ where: { userId: session.user.id } })
    return data
  }
 
  const data = await getExpense()

  const currencyCodewithAmount = (currencyCode, amount) => {
    const currenctFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(amount)
    return currenctFormat
  };

  const transformedData = data.map(item => ({
    id: item.id,
    amount_with_code: currencyCodewithAmount(item.currency_code, item.amount),
    amount: item.amount,
    date: new Date(item.expense_date).toLocaleDateString('en-US'), // Adjust date format as needed
    description: item.title, // Combine title and sub-description
    currency_sign: item.currency_code
  }))

  return (
    <div className='h-full' >
      <div className='p-2 px-4 flex items-center border-b justify-between'>
        <p className=' font-bold'>Expense</p>
        <AddExpense />
      </div>
      <div className='p-2 max-w-7xl m-auto '>
        <DataTable columns={columns} data={transformedData} />
      </div>
    </div>
  )
}

export default Expense