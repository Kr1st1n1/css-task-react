import styled from "styled-components";

export const ScrollbarWrapper = styled.div(() => ({
    height: "100%",
    maxHeight: "275px",
    overflowY: "scroll",
    overflowX: "hidden",
    background: "#353535",
    direction: "ltr",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",

    "::-webkit-scrollbar": {
        width: "10px",
    },
    "::-webkit-scrollbar-track": {
        borderRadius: "10px",
        background: "#B0B0B0",
        marginBottom: "10px",
    },
    "::-webkit-scrollbar-thumb": {
        background: '#5F5F5F',
        borderRadius: "0px 0px 5px 5px",
        height: "161px",
    },
    "::-webkit-scrollbar-thumb:hover": {
        background: '#5F5F5F',
        maxHeight: "10px"
    },

     "@media (min-width: 900px)": {
        maxHeight: 562,
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "15px",
        borderTopRightRadius: "15px",
        borderTopLeftRadius: "0px",

        "::-webkit-scrollbar-track": {
            marginTop: "15px",
            marginBottom: "15px",
        },

        "::-webkit-scrollbar-thumb": {
            borderRadius: "5px 5px 5px 5px",
        },
    },

     "@media (min-width: 1200px)": {
        maxHeight: 562,
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
        
        "::-webkit-scrollbar-track": {
            marginTop: "0",
            marginBottom: "10px",
        },

        "::-webkit-scrollbar-thumb": {
            borderRadius: "0px 0px 5px 5px",
        }
    }
}))

export default ScrollbarWrapper;
