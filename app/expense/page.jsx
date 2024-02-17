import { Button } from '@/components/ui/button'
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './column'

async function getData() {
  return [
    {
      "id": "728ed52f",
      "amount": 100,
      "date": "02/01/1901",
      "description": "Hotel",
      "currency sign": "₹"
    },
    {
      "id": "8a4bc71e",
      "amount": 50,
      "date": "05/01/1901",
      "description": "Transportation",
      "currency sign": "₹"
    },
    {
      "id": "c91b3f0d",
      "amount": 75,
      "date": "07/01/1901",
      "description": "Dinner",
      "currency sign": "₹"
    },
    {
      "id": "f7e2a918",
      "amount": 200,
      "date": "16/01/1901",
      "description": "Shopping",
      "currency sign": "₹"
    },
    {
      "id": "5d63a2b4",
      "amount": 120,
      "date": "12/01/1901",
      "description": "Gifts",
      "currency sign": "₹"
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
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Expense