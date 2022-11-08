
import classes from './charImage.module.css';
type CharImageProps = {
    image: string;
}

function CharImage({ image }: CharImageProps) {
    return <img src={image} className={classes.image} alt="name" />

}
export default CharImage;