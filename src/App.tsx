import { ChangeEvent, useCallback, useState } from 'react'
import './App.css'
import Search from './components/Search'
import ChampionsBar from './containers/ChampionsBar'
import CharacterTable from './containers/CharacterTable'
import TagsContainer from './containers/TagsContainer'
import { CharacterTableContext, SearchContext, TagsContext } from './context'
import jsonData from './data/characters.json'
import { useFilter, useTags } from './hooks'
import useCharacterSelect from './hooks/useCharacterSelect'
import { Character } from './types'
function App() {
  const [searchKey, setSearchKey] = useState("")
  const { allTags } = useTags(jsonData as Character[])
  const [selectedTags, setSelectedTags] = useState<Array<string>>([])
  const { filteredCharacters } = useFilter(jsonData as Character[], searchKey, selectedTags)
  const [checkedCharacters, setCheckedCharacters] = useState<string[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCharacterSelect = useCallback(
    useCharacterSelect(checkedCharacters, setCheckedCharacters)
    , [checkedCharacters, setCheckedCharacters])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }
  const onTagToggle = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((p: Array<string>) => [...p, tag]);
    } else {
      setSelectedTags((p: Array<string>) => {
        const newTags = [...selectedTags]
        const idx = p.indexOf(tag)
        if (idx > -1) {
          newTags.splice(idx, 1);
          return newTags;
        }
        return p
      });
    }
  }

  // const { filteredData } = useFilteredList()
  return (
    <div className="App">
      <header><h2>Select your squad to defend earthrealm</h2></header>
      <CharacterTableContext.Provider value={{ checkedCharacters, filteredCharacters, setCheckedCharacters }}>

        <ChampionsBar />
        <TagsContainer allTags={allTags} selectedTags={selectedTags} onClick={onTagToggle} />
        <Search onChange={handleChange} searchKey={searchKey} />
        {/* <CharImage image="https://cdn.dashfight.com/e722d1927df11f2583240eac731875159b65cae7.png" /> */}
        <SearchContext.Provider value={searchKey}>
          <TagsContext.Provider value={selectedTags}>

            <CharacterTable filteredCharacters={filteredCharacters} onClick={onCharacterSelect} checkedCharacters={checkedCharacters} />
          </TagsContext.Provider>
        </SearchContext.Provider>
      </CharacterTableContext.Provider>

    </div>
  )
}

export default App
