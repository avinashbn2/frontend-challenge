import { ChangeEvent, useState } from 'react'
import './App.css'
import Search from './components/Search'
import CharacterTable from './containers/CharacterTable'
import TagsContainer from './containers/TagsContainer'
import { CharacterContext, SearchContext, TagsContext } from './context'
import jsonData from './data/characters.json'
import { useTags } from './hooks'
import { Character } from './types'
function App() {
  const [searchKey, setSearchKey] = useState("")

  const { allTags } = useTags(jsonData as Character[])
  const [selectedTags, setSelectedTags] = useState<Array<string>>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }
  const onTagToggle = (tag: string) => {
    console.log('tag', tag)
    if (!selectedTags.includes(tag)) {
      setSelectedTags((p: Array<string>) => [...p, tag]);
    } else {
      setSelectedTags((p: Array<string>) => {
        const newTags = [...selectedTags]
        const idx = p.indexOf(tag)
        console.log('idx', idx)
        if (idx > -1) {
          newTags.splice(idx, 1);
          console.log('newTags', newTags)
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
      <TagsContainer allTags={allTags} selectedTags={selectedTags} onClick={onTagToggle} />
      <Search onChange={handleChange} searchKey={searchKey} />
      {/* <CharImage image="https://cdn.dashfight.com/e722d1927df11f2583240eac731875159b65cae7.png" /> */}
      <CharacterContext.Provider value={jsonData as Character[]}>
        <SearchContext.Provider value={searchKey}>
          <TagsContext.Provider value={selectedTags}>
            <CharacterTable data={jsonData as Character[]} />
          </TagsContext.Provider>
        </SearchContext.Provider>
      </CharacterContext.Provider>
    </div>
  )
}

export default App
