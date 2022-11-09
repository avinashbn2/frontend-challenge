
const useCharacterSelect = (checkedCharacters: Array<string>,setCheckedCharacters: (a: string[])=> void) => {
    const cb =  (characterName: string) => {
        if (!checkedCharacters.includes(characterName)) {
            setCheckedCharacters([...checkedCharacters, characterName])
        } else {
            const characters = [...checkedCharacters]
            const idx = checkedCharacters.indexOf(characterName)
            if (idx > -1) {
                characters.splice(idx, 1)
                setCheckedCharacters(characters)
            }
        }
        
    }
    return cb;
}
export default useCharacterSelect