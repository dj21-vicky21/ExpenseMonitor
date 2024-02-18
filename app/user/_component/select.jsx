import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function Select() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="ssss" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="test">Light</SelectItem>
        <SelectItem value="sample">Dark</SelectItem>
        <SelectItem value="oko">System</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default Select