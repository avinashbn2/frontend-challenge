import { useCallback, useContext } from "react";
import { CharacterTableContext } from "../../context";
import { useSelectedCharacters } from "../../hooks";
import { useChampionsAverage } from "../../hooks/useChampionsAverage";
import useCharacterSelect from "../../hooks/useCharacterSelect";
import { Character } from "../../types";
import classes from './championsBar.module.css';
import Hoverable from "./Hoverable";

function ChampionsBar() {
    const { checkedCharacters, filteredCharacters, setCheckedCharacters } = useContext(CharacterTableContext)
    const selectedCharData = useSelectedCharacters(checkedCharacters, filteredCharacters)
    const average = useChampionsAverage(selectedCharData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onRemove = useCallback(
        useCharacterSelect(checkedCharacters, setCheckedCharacters), [checkedCharacters, setCheckedCharacters])


    return (
        <div className={classes.container}>
            <div className={classes.bar}>
                {
                    selectedCharData.map((char: Character) => <Hoverable onRemove={() => onRemove(char.name)} image={char.image} />)
                }

            </div>
            <div className={classes.bar}>{
                Object.keys(average).map((k) => <div className={classes.championScore}>
                    <p className={classes.label}>{k}</p>
                    <p className={classes.score}>{isNaN(average[k]) ? '-' : average[k]}</p>
                </div>)


            }</div>
            <h6 className={classes.info}>*Totals as average for squad</h6>
        </div>)

}
export default ChampionsBar