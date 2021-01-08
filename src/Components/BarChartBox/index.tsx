import React from 'react';
import * as Style from './styles';
import * as Recharts from 'recharts';

interface IBarChartBoxProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
    return (
        <Style.Container>
            <Style.SideLeft>
                <h2>{title}</h2>
                <Style.LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Style.Legend key={index} color={indicator.color}>
                                <div>{indicator.percent}</div>
                                <span>{indicator.name}</span>
                            </Style.Legend>
                        ))
                    }
                </Style.LegendContainer>
            </Style.SideLeft>
            <Style.SideRight>
                <Recharts.ResponsiveContainer>
                    <Recharts.BarChart data={data}>
                        <Recharts.Bar dataKey="amount">
                            {
                                data.map(indicator => (
                                    <Recharts.Cell
                                        key={indicator.name}
                                        fill={indicator.color}
                                    >
                                    </Recharts.Cell>
                                ))
                            }
                        </Recharts.Bar>
                    </Recharts.BarChart>
                </Recharts.ResponsiveContainer>
            </Style.SideRight>
        </Style.Container>
    );
}

export default BarChartBox;