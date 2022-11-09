
import classes from './charImage.module.css';
type CharImageProps = {
    image: string;
    width?: string | number;
    height?: string | number;
}

function CharImage({ image, width, height }: CharImageProps) {
    return <img src={image} className={classes.image} style={{ width, height }} alt="name" />

}
export default CharImage;