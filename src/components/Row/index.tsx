import classes from './row.module.css';
import RowItem from './RowItem';
type RowProps = {
    children: React.ReactNode;
    onClick?: () => void;
    classes?: string;
}
function Row({ children, onClick, classes: otherClasses }: RowProps) {
    return (
        <div onClick={onClick} className={`${classes.row} ${otherClasses}`}>
            {children}
        </div>
    )

}
Row.Item = RowItem;
export default Row;