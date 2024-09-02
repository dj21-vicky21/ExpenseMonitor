import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function SelectTheme() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Dark" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="test">Light</SelectItem>
        <SelectItem value="sample">Dark</SelectItem>
        <SelectItem value="oko">System</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default SelectTheme