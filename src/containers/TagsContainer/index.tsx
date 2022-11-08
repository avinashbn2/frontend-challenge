import TagBadge from '../../components/TagBadge';
import classes from './tagsContainer.module.css';
type TagsContainerProps = {
    selectedTags: Array<string>;
    onClick: (a: string) => void;
    allTags: Array<string>;
}
function TagsContainer({ allTags, selectedTags, onClick }: TagsContainerProps) {
    return (
        <div className={classes.tagsContainer}>
            {
                allTags.map((tag: string) => <TagBadge onClick={onClick} value={tag} selected={selectedTags.includes(tag)}></TagBadge>)
            }
        </div>
    )
}

export default TagsContainer;