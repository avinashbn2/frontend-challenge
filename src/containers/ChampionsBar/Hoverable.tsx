import { useState } from "react";
import CharImage from "../../components/CharImage";
import HoverableDiv from "../../components/HoverableDiv";

type HoverableProps = {
    image: string;
    onRemove: () => void;
}
function Hoverable({ image, onRemove }: HoverableProps) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };


    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (

        <div style={{ padding: 10 }}>
            <HoverableDiv handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver}>
                {

                    !isHovering ?
                        <CharImage width={80} height={80} image={image} />
                        : <div onClick={onRemove} style={{ borderRadius: '50%', cursor: 'pointer', background: "red", position: 'relative' }}>
                            <>
                                <div style={{ color: 'white', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%' }}>
                                    Remove

                                </div>
                                <CharImage width={80} height={80} image={image} />

                            </>
                        </div>

                }
            </HoverableDiv>
        </div>
    )
}

export default Hoverable