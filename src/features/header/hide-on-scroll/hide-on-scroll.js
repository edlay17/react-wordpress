// libs
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";


export const HideOnScroll = (props) => {
    const { children, isDisable } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={isDisable ? true : !trigger}>
            {children}
        </Slide>
    );
}