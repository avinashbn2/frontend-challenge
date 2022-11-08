import CharImage from '../../components/CharImage'
import Power from '../../components/Power'
import Row from '../../components/Row'
import TagBadge from '../../components/TagBadge'
import { Character } from "../../types"

type CharacterRowProps = {
    character: Character,

}
function CharacterRow({ character: { name, image, universe, tags = [], abilities } }: CharacterRowProps) {

    return (
        <Row>
            <>

                <Row.Item span={1}>
                    <CharImage image={image} />
                </Row.Item>
                <Row.Item span={2}>{name}</Row.Item>

                <Row.Item span={4}>
                    {tags.map((tag) => <TagBadge value={tag.tag_name} />)}
                </Row.Item>
                {
                    abilities.map((ab) => <Row.Item>
                        <Power value={ab.abilityScore} max={10} />
                    </Row.Item>)
                }
            </>
        </Row>
    )
}


export default CharacterRow