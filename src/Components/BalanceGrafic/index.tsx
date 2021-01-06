import React from 'react';
import { Container, SideLeft, SideRight, Legend, LegendContainer } from './styles';
import RechartPie from '../../Components/RechartPie'

interface IBalanceGraficProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const BalanceGrafic: React.FC<IBalanceGraficProps> = ({ data }) => {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Legend key={index} color={indicator.color}>
                                <div>{indicator.percent}</div>
                                <span>{indicator.name}</span>
                            </Legend>

                        ))
                    }
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <RechartPie data={data}/>

            </SideRight>
        </Container>
    )
}

export default BalanceGrafic;