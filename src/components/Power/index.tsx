import classes from './power.module.css';
type PowerProps = {
    value: number;
    max?: number;
}
function Power({value, max=10}: PowerProps) {
    return <h5 className={`${classes.power} ${max===value? classes.max: ""}`}>{value}</h5>
}
export default Power;