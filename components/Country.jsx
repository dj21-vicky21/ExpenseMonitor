"use client"

import React, { useEffect, useState } from 'react'
import { countries } from 'countries-list'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function CountryDetails({ defaultValue }) {

    const [countryOptions, setCountryOptions] = useState()

    useEffect(() => {
        const country = Object.entries(countries).map(([countryCode, details]) => ({
            "countryCode": countryCode,
            "name": details.name,
            "phone": details.phone[0], // Assuming there's only one phone number and it's not an array in the output
            "currency": details.currency[0] // Keeping currency as an array
        }));
        setCountryOptions(country)
    }, [])

    return (
        <Select onValueChange={(e) => { console.log(e) }}>
            <SelectTrigger className="w-[180px]" >
                <SelectValue defaultValue={defaultValue} placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
                {countryOptions?.length && countryOptions?.map(country => <SelectItem value={country}>{country.name}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}

export default CountryDetails