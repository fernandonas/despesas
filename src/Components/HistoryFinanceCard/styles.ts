import styled from 'styled-components'

interface ITagColor {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX( 10px )
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    > div span {
        font-weight: 500;
        font-size: 22px;
    }
`;

export const Tag = styled.div<ITagColor>`
    width: 13px;
    height: 60%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0px;
    border-radius: 10px;    
`;