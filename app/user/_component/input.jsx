import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

function UserInput({ className, label, type, disabled, defaultvalue }) {

    return (
        <p className="flex items-center gap-3">
            <Label htmlFor={label} className="w-[150px]">{label}</Label>
            <Input id={label} defaultValue={defaultvalue} className={cn('[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none', className)} type={type} disabled={disabled}  />
        </p>
    )
}

export default UserInput