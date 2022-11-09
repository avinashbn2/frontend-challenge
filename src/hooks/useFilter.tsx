import { useEffect, useState } from "react";
import { Character } from "../types";
/**
 * 
 * @param characterData 
 * @param searchKey 
 * @param selectedTags 
 * @returns filtered data base on search Key and  selected tags
 */
function useFilter(characterData: Character[], searchKey: string, selectedTags: Array<string>) {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characterData)
    useEffect(() => {
        if (!searchKey && selectedTags.length === 0) {
            setFilteredCharacters(characterData)
        } else {
            const characters: Character[] = characterData.filter((character) => {
                const { tags = [], name } = character
                let flag = true
                // if name is valid then check if it matches the search key
                if (searchKey && !name.toLowerCase().includes(searchKey.toLowerCase())) {
                    flag = false
                }
                if (selectedTags.length > 0) {
                    let searchFlag = true
                    selectedTags.forEach((tag) => {
                        const mTags = tags.map(t => t.tag_name)
                        if (!mTags.includes(tag)) {
                            searchFlag = false
                        }

                    })
                    if (searchFlag) {
                        return flag && true
                    } else {
                        return false
                    }
                }
                return flag
            })

            setFilteredCharacters(characters)
        }


    }, [characterData, searchKey, selectedTags])


    return { filteredCharacters }


}
export default useFilter