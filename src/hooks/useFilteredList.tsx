import { useEffect, useState } from 'react'

export const useFilteredList = ({ data, searchKey, tags }) => {
    const [filteredData, setFilteredData] = useState(data)
    useEffect(() => {
        data.filter(char => Object.values(char).filter(c => c.toLowerCase().includes(searchKey.toLowerCase())))
    }, [])
}