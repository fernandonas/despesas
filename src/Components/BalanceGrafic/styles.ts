import styled from 'styled-components'

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
    width: 48%;
    height: 260px;
    border-radius: 7px;
    margin: 10px 0px;
    display: flex;
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }


`;

export const SideRight = styled.main`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Pizza = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.warning};
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 14px;

    > div {
       background-color: ${props => props.color};
       width:40px;
       height: 40px;
       font-size: 0.8rem;
       border-radius: 5px;
       line-height: 40px;
       text-align: center;
    }

    > div:after {
        content: '%'
    }

    > span {
        margin-left: 5px;
    }

`;

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 170px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
        border: 1px solid gray
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }   

`;