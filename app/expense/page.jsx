import { Button } from '@/components/ui/button'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './column'
import AddExpense from '@/components/addExpense'

async function getData() {
  return [
    {
      "id": "728ed52f",
      "amount": 100,
      "date": "2/09/1901",
      "description": "Hotel",
      "currency_sign": "INR"
    },
    {
      "id": "8a4bc71e",
      "amount": 50,
      "date": "5/15/1901",
      "description": "Transportation",
      "currency_sign": "INR"
    },
    {
      "id": "c91b3f0d",
      "amount": 75,
      "date": "7/20/1901",
      "description": "Dinner",
      "currency_sign": "INR"
    },
    {
      "id": "f7e2a918",
      "amount": 200,
      "date": "10/10/1901",
      "description": "Shopping",
      "currency_sign": "INR"
    },
    {
      "id": "5d63a2b4",
      "amount": 120,
      "date": "12/25/1901",
      "description": "Gifts",
      "currency_sign": "INR"
    },
    {
      "id": "1a2b3c4d",
      "amount": 150,
      "date": "3/03/1901",
      "description": "Entertainment",
      "currency_sign": "INR"
    },
    {
      "id": "9e8f7c6b",
      "amount": 80,
      "date": "6/18/1901",
      "description": "Lunch",
      "currency_sign": "INR"
    },
    {
      "id": "3f4g5h6i",
      "amount": 300,
      "date": "9/30/1901",
      "description": "Travel",
      "currency_sign": "INR"
    },
    {
      "id": "7j8k9l0m",
      "amount": 90,
      "date": "11/11/1901",
      "description": "Utilities",
      "currency_sign": "INR"
    },
    {
      "id": "2n3o4p5q",
      "amount": 180,
      "date": "4/20/1901",
      "description": "Groceries",
      "currency_sign": "INR"
    },
    {
      "id": "6r7s8t9u",
      "amount": 70,
      "date": "8/08/1901",
      "description": "Coffee",
      "currency_sign": "INR"
    },
    {
      "id": "1v2w3x4y",
      "amount": 250,
      "date": "1/01/1901",
      "description": "Books",
      "currency_sign": "INR"
    },
    {
      "id": "5z6a7b8c",
      "amount": 110,
      "date": "5/05/1901",
      "description": "Medical",
      "currency_sign": "INR"
    },
    {
      "id": "9d8e7f6g",
      "amount": 60,
      "date": "7/07/1901",
      "description": "Movies",
      "currency_sign": "INR"
    },
    {
      "id": "3h4i5j6k",
      "amount": 280,
      "date": "10/20/1901",
      "description": "Electronics",
      "currency_sign": "INR"
    },
    {
      "id": "7l8m9n0o",
      "amount": 95,
      "date": "12/12/1901",
      "description": "Clothing",
      "currency_sign": "INR"
    },
    {
      "id": "2p3q4r5s",
      "amount": 130,
      "date": "2/02/1901",
      "description": "Home improvement",
      "currency_sign": "INR"
    },
    {
      "id": "6t7u8v9w",
      "amount": 45,
      "date": "6/06/1901",
      "description": "Snacks",
      "currency_sign": "INR"
    },
    {
      "id": "1x2y3z4a",
      "amount": 170,
      "date": "9/09/1901",
      "description": "Fitness",
      "currency_sign": "INR"
    },
    {
      "id": "5b6c7d8e",
      "amount": 85,
      "date": "11/21/1901",
      "description": "Haircut",
      "currency_sign": "INR"
    },
    {
      "id": "9f8g7h6i",
      "amount": 220,
      "date": "3/30/1901",
      "description": "Hobbies",
      "currency_sign": "INR"
    },
    {
      "id": "3j4k5l6m",
      "amount": 55,
      "date": "8/08/1901",
      "description": "Pet supplies",
      "currency_sign": "INR"
    },
    {
      "id": "7n8o9p0q",
      "amount": 160,
      "date": "1/15/1901",
      "description": "Art",
      "currency_sign": "INR"
    },
    {
      "id": "2r3s4t5u",
      "amount": 40,
      "date": "4/04/1901",
      "description": "Subscriptions",
      "currency_sign": "INR"
    },
    {
      "id": "6v7w8x9y",
      "amount": 190,
      "date": "7/27/1901",
      "description": "Furniture",
      "currency_sign": "INR"
    },
    {
      "id": "1z2a3b4c",
      "amount": 65,
      "date": "10/10/1901",
      "description": "Magazines",
      "currency_sign": "INR"
    },
    {
      "id": "5d6e7f8g",
      "amount": 140,
      "date": "12/05/1901",
      "description": "Car maintenance",
      "currency_sign": "INR"
    },
    {
      "id": "9h0i1j2k",
      "amount": 75,
      "date": "2/18/1901",
      "description": "Games",
      "currency_sign": "INR"
    },
    {
      "id": "3l4m5n6o",
      "amount": 235,
      "date": "5/25/1901",
      "description": "Tech gadgets",
      "currency_sign": "INR"
    },
    {
      "id": "7p8q9r0s",
      "amount": 105,
      "date": "8/11/1901",
      "description": "Stationery",
      "currency_sign": "INR"
    },
    {
      "id": "2t3u4v5w",
      "amount": 50,
      "date": "11/02/1901",
      "description": "Dental care",
      "currency_sign": "INR"
    }
  ]
}

const Expense = () => {

  const data = getData()

  return (
    <div className='h-full' >
      <div className='p-2 px-4 flex items-center border-b justify-between'>
        <p className=' font-bold'>Expense</p>
        <AddExpense />
      </div>
      <div className='p-2 max-w-7xl m-auto '>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Expense