import { MouseEventHandler, ReactNode } from "react";

type HoverableDivProps = {
    handleMouseOver: MouseEventHandler;
    handleMouseOut: MouseEventHandler;
    children: ReactNode | Array<ReactNode>;
}
const HoverableDiv = ({ handleMouseOver, handleMouseOut, children }: HoverableDivProps) => {
    return (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            {children}
        </div>
    );
};

export default HoverableDiv;