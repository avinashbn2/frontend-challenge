import classes from './icons.module.css';
type CheckIconProps = {
    width: number | string;
    height: number | string;
}
const CheckIcon = (props: CheckIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="3.4 5.6 17.6 13.4"
        className={classes.checkmark}
        {...props}
    >
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
    </svg>
)


export default CheckIcon;


