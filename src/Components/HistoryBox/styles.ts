import styled from 'styled-components';

interface ILegendProps {
    color: string;
};

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0px;
    padding: 30px 20px;
    border-radius: 7px;
    flex-direction: column;
`;

export const ChartContainer = styled.div`
    flex: 1;    
    height: 260px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 7px;
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

    > span {
        margin-left: 5px;
    }
`;