import React from "react";
import PropTypes from "prop-types";
import { ScrollbarWrapper } from "../../../styles/scrollbar.styled";

export const Scrollbar = props => {
    const {children} = props
    return (
        <ScrollbarWrapper>
                {children}
        </ScrollbarWrapper>
    )
}

Scrollbar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Scrollbar;
