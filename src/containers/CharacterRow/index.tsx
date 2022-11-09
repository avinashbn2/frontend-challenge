import { Checkbox } from '@mui/material'
import CharImage from '../../components/CharImage'
import Power from '../../components/Power'
import Row from '../../components/Row'
import TagBadge from '../../components/TagBadge'
import { Character } from "../../types"
import classes from './characterRow.module.css'

type CharacterRowProps = {
    character: Character;
    checked: boolean;
    disabled?: boolean;
    onClick: () => void;

}
function CharacterRow({ character: { name, image, universe, tags = [], abilities }, checked, onClick, disabled = false }: CharacterRowProps) {

    return (
        <Row onClick={!disabled ? onClick : () => { }} classes={checked ? classes.highlight : ''}>
            <>
                <Row.Item span={1}>
                    <Checkbox checked={checked} disabled={!checked && disabled} onClick={onClick} />
                </Row.Item>

                <Row.Item span={1}>
                    <CharImage image={image} />
                </Row.Item>
                <Row.Item span={2}>{name}</Row.Item>

                <Row.Item span={3}>
                    {tags.map((tag) => <TagBadge key={tag.tag_name} value={tag.tag_name} />)}
                </Row.Item>
                {
                    abilities.map((ab) => <Row.Item key={ab.abilityName} span={0.8}>
                        <Power value={ab.abilityScore} max={10} />
                    </Row.Item>)
                }
            </>
        </Row>
    )
}


export default CharacterRow