import classes from './row.module.css';
type RowItemProps = {
    children: React.ReactNode;
    span?: number;
}

function RowItem({ children, span = 1 }: RowItemProps) {
    return <div className={classes.item} style={{ gridColumn: `span ${span}` }}>{children}</div>
}

export default RowItem;