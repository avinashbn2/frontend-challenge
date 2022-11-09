import { useEffect, useState } from "react";
import { Character } from "../types";

const useSelectedCharacters = (selectedCharacterNames: Array<string>, characters: Array<Character>) => {
    const [selectedCharData, setSelectedCharData] = useState<Character[]>([]);
    useEffect(() => {
        const selChars = characters.filter((c: Character) => selectedCharacterNames.includes(c.name))
        setSelectedCharData(selChars)
    }, [selectedCharacterNames, characters])

    return selectedCharData
}
export default useSelectedCharacters