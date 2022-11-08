import { createContext } from "react";
import { Character } from "../types";

export const CharacterContext = createContext<Array<Character>>([])
export const SearchContext = createContext<string>("");
export const TagsContext = createContext<Array<string>>([]);




