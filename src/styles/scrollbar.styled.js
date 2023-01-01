import styled from "styled-components";

export const ScrollbarWrapper = styled.div(() => ({
    height: "100%",
    maxHeight: "275px",
    overflowY: "scroll",
    overflowX: "hidden",
    background: "grey",
    direction: "ltr", 

    "::-webkit-scrollbar": {
        width: "10px",
    },
    "::-webkit-scrollbar-track": {
        borderRadius: "10px"
    },
    "::-webkit-scrollbar-thumb": {
        background: 'darkgrey',
        borderRadius: "15px",
        height: "2px"
    },
    "::-webkit-scrollbar-thumb:hover": {
        background: 'grey',
        maxHeight: "10px"
    },

     "@media (min-width: 900px)": {
        maxHeight: 562,
    }
    
}))

export default ScrollbarWrapper;
