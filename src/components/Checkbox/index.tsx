import classes from './checkbox.module.css';
type CheckboxProps = {
    checked: boolean;
    onClick: () => {}
}
function Checkbox({ checked, onClick }: CheckboxProps) {
    return (
        <input className={classes.checkbox} type="checkbox" checked={checked} onClick={onClick} />
    )
}
export default Checkbox