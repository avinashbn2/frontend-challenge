import CheckIcon from '../Icons/CheckIcon';
import classes from './tagBadge.module.css';
type TagBadgeProps = {
    value: string;
    onClick?: (a: string) => void;
    // MouseEventHandler<HTMLDivElement>;
    selected?: boolean;
}
function TagBadge({ value, selected, onClick }: TagBadgeProps) {
    const handleClick = () => {
        if (onClick) {
            onClick(value)
        }
    }
    return (
        <div onClick={handleClick} className={`${classes.tag}  ${selected ? classes.selected : ""}`} >
            {value}  {selected && <CheckIcon width={30} height={30} />}
        </div>)

}
export default TagBadge;