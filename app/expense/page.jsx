import { Button } from '@/components/ui/button'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './column'

async function getData() {
  return [
    {
      "id": "728ed52f",
      "amount": 100,
      "date": "2/09/1901",
      "description": "Hotel"
    },
    {
      "id": "8a4bc71e",
      "amount": 50,
      "date": "5/15/1901",
      "description": "Transportation"
    },
    {
      "id": "c91b3f0d",
      "amount": 75,
      "date": "7/20/1901",
      "description": "Dinner"
    },
    {
      "id": "f7e2a918",
      "amount": 200,
      "date": "10/10/1901",
      "description": "Shopping"
    },
    {
      "id": "5d63a2b4",
      "amount": 120,
      "date": "12/25/1901",
      "description": "Gifts"
    },
    {
      "id": "1a2b3c4d",
      "amount": 150,
      "date": "3/03/1901",
      "description": "Entertainment"
    },
    {
      "id": "9e8f7c6b",
      "amount": 80,
      "date": "6/18/1901",
      "description": "Lunch"
    },
    {
      "id": "3f4g5h6i",
      "amount": 300,
      "date": "9/30/1901",
      "description": "Travel"
    },
    {
      "id": "7j8k9l0m",
      "amount": 90,
      "date": "11/11/1901",
      "description": "Utilities"
    },
    {
      "id": "2n3o4p5q",
      "amount": 180,
      "date": "4/20/1901",
      "description": "Groceries"
    },
    {
      "id": "6r7s8t9u",
      "amount": 70,
      "date": "8/08/1901",
      "description": "Coffee"
    },
    {
      "id": "1v2w3x4y",
      "amount": 250,
      "date": "1/01/1901",
      "description": "Books"
    },
    {
      "id": "5z6a7b8c",
      "amount": 110,
      "date": "5/05/1901",
      "description": "Medical"
    },
    {
      "id": "9d8e7f6g",
      "amount": 60,
      "date": "7/07/1901",
      "description": "Movies"
    },
    {
      "id": "3h4i5j6k",
      "amount": 280,
      "date": "10/20/1901",
      "description": "Electronics"
    },
    {
      "id": "7l8m9n0o",
      "amount": 95,
      "date": "12/12/1901",
      "description": "Clothing"
    },
    {
      "id": "2p3q4r5s",
      "amount": 130,
      "date": "2/02/1901",
      "description": "Home improvement"
    },
    {
      "id": "6t7u8v9w",
      "amount": 45,
      "date": "6/06/1901",
      "description": "Snacks"
    },
    {
      "id": "1x2y3z4a",
      "amount": 170,
      "date": "9/09/1901",
      "description": "Fitness"
    },
    {
      "id": "5b6c7d8e",
      "amount": 85,
      "date": "11/21/1901",
      "description": "Haircut"
    },
    {
      "id": "9f8g7h6i",
      "amount": 220,
      "date": "3/30/1901",
      "description": "Hobbies"
    },
    {
      "id": "3j4k5l6m",
      "amount": 55,
      "date": "8/08/1901",
      "description": "Pet supplies"
    },
    {
      "id": "7n8o9p0q",
      "amount": 160,
      "date": "1/15/1901",
      "description": "Art"
    },
    {
      "id": "2r3s4t5u",
      "amount": 20,
      "date": "4/04/1901",
      "description": "Subscriptions"
    },
    {
      "id": "6v7w8x9y",
      "amount": "04",
      "date": "7/27/1901",
      "description": "Furniture"
    },
    {
      "id": "1z2a3b4c",
      "amount": 65,
      "date": "10/10/1901",
      "description": "Magazines"
    },
    {
      "id": "5d6e7f8g",
      "amount": 140,
      "date": "12/05/1901",
      "description": "Car maintenance"
    },
    {
      "id": "9h0i1j2k",
      "amount": 75,
      "date": "2/18/1901",
      "description": "Games"
    },
    {
      "id": "3l4m5n6o",
      "amount": 235,
      "date": "5/25/1901",
      "description": "Tech gadgets"
    },
    {
      "id": "7p8q9r0s",
      "amount": 105,
      "date": "8/11/1901",
      "description": "Stationery"
    },
    {
      "id": "2t3u4v5w",
      "amount": 50,
      "date": "11/02/1901",
      "description": "Dental care"
    }
  ]
}


async function Expense() {

  const data = await getData()

  return (
    <div className=''>
      <div className='p-2 px-4 flex items-center border-b justify-between'>
        <p className=' font-bold'>Expense</p>
        <Button variant="secondary">Add</Button>
      </div>
      <div className='p-2'>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Expense