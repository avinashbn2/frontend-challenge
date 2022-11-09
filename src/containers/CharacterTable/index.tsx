import Row from "../../components/Row";
import { Character } from "../../types";
import CharacterRow from "../CharacterRow";
import classes from './characterTable.module.css';

type CharacterTableProps = {
    onClick: (s: string) => void;
    checkedCharacters: string[];
    filteredCharacters: Array<Character>;

}
function CharacterTable({ onClick, checkedCharacters, filteredCharacters }: CharacterTableProps) {
    // const { value } = useContext()

    // const searchKey = useContext(SearchContext);
    // const selectedTags = useContext(TagsContext);


    // const { filteredCharacters } = useFilter(data, searchKey, selectedTags)

    return (
        <div className={classes.container}>
            <div className={classes.info} style={checkedCharacters.length === 6 ? { color: 'red' } : {}}>
                *Max 6 champions could be selected per team
            </div>
            <Row>
                <Row.Item span={2}></Row.Item>
                <Row.Item span={3}><h5>Character</h5></Row.Item>
                <Row.Item span={2}><h5>Tags</h5></Row.Item>
                <Row.Item span={1}><h5>Mobility</h5></Row.Item>
                <Row.Item span={1}><h5>Technique</h5></Row.Item>
                <Row.Item span={1}><h5>Survivability</h5></Row.Item>
                <Row.Item span={1}><h5>Power</h5></Row.Item>
                <Row.Item span={1}><h5>Energy</h5></Row.Item>


            </Row>

            <div className={classes.characterRows}>
                {
                    filteredCharacters.map((char: Character) => <CharacterRow disabled={checkedCharacters.length >= 6} key={char.id} character={char} checked={checkedCharacters.includes(char.name)} onClick={() => {
                        onClick(char.name)
                    }}></CharacterRow>)
                }
            </div>
        </div >

    )
}
export default CharacterTable