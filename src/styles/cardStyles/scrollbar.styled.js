import styled from 'styled-components';

export const ScrollbarWrapper = styled.div(() => ({
    height: '100.2%',
    maxHeight: '275px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: '#353535',
    direction: 'ltr',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    paddingBottom: '11px',
    borderBottom: '10px solid #353535',

    '::-webkit-scrollbar': {
        width: '10px',
    },
    '::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#B0B0B0',
        marginBottom: '10px',
    },
    '::-webkit-scrollbar-thumb': {
        background: '#5F5F5F',
        borderRadius: '0px 0px 5px 5px',
        height: '161px',
    },
    '::-webkit-scrollbar-thumb:hover': {
        maxHeight: '161px',
    },

        '@media (min-width: 641px)': {
        paddingBottom: '100px',
        borderBottom: '0px solid #353535',
        maxHeight: '100%',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '15px',
        borderTopRightRadius: '15px',
        borderTopLeftRadius: '0px',

        '::-webkit-scrollbar-track': {
            marginTop: '15px',
            marginBottom: '15px',
        },

        '::-webkit-scrollbar-thumb': {
            borderRadius: '5px 5px 5px 5px',
        },
    },

     '@media (min-width: 1201px)': {
        maxHeight: '100%',
        borderBottom: '10px solid #353535',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '0',
        borderTopLeftRadius: '0',
        paddingBottom: '11px',
        
        '::-webkit-scrollbar-track': {
            marginTop: '0',
            marginBottom: '0px',
        },

        '::-webkit-scrollbar-thumb': {
            borderRadius: '0px 0px 5px 5px',
        }
    }
}))

export default ScrollbarWrapper;
