import { Character } from "../types";
/**
 * 
 * Hook to extract tags from Characters array
 */

function useTags(characterData: Character[]) {
    const allTags: Array<string> = []
    characterData.forEach((character)=> {
        const { tags=[] } =  character
        const tagNames = tags.map(t=>t.tag_name);
        for(let t of tagNames) {

        if(!allTags.includes(t)){
            allTags.push(t)
        }}
    })
    return {allTags}

}
export default useTags