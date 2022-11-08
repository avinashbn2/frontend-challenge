import { useContext, useEffect } from "react";
import { SearchContext, TagsContext } from "../../context";
import { useFilter } from "../../hooks";
import { Character } from "../../types";
import CharacterRow from "../CharacterRow";
import classes from './characterTable.module.css';

type CharacterTableProps = {
    data: Character[];

}
function CharacterTable({ data = [] }: CharacterTableProps) {
    // const { value } = useContext()

    const searchKey = useContext(SearchContext);
    const selectedTags = useContext(TagsContext);

    useEffect(() => {
        console.log("Search", searchKey)
    }, [searchKey])

    useEffect(() => {
        console.log('selectedTags', selectedTags)
    }, [selectedTags])
    const { filteredCharacters } = useFilter(data, searchKey, selectedTags)


    return (
        <div className={classes.container}>
            {
                filteredCharacters.map((char: Character) => <CharacterRow character={char}></CharacterRow>)
            }
        </div>
    )
}
export default CharacterTable