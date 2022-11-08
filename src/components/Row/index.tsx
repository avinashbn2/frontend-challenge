import classes from './row.module.css';
import RowItem from './RowItem';
type RowProps = {
    children: React.ReactNode;
}
function Row({children}: RowProps) {
    return <div className={classes.row}>{children}
   </div>

}
Row.Item = RowItem;
export default Row;