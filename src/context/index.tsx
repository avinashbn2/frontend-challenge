import { createContext, Dispatch, SetStateAction } from "react";
import { Character } from "../types";
export type CharacterTableContextInterface = {
    checkedCharacters: string[];
    filteredCharacters: Array<Character>;
    setCheckedCharacters: Dispatch<SetStateAction<string[]>>;

}
export const CharacterTableContext = createContext<CharacterTableContextInterface>({
    checkedCharacters: [],
    filteredCharacters: [],
    setCheckedCharacters: () => { }
})
export const SearchContext = createContext<string>("");
export const TagsContext = createContext<Array<string>>([]);




