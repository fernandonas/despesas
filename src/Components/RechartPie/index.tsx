import React from 'react';
import { Pie, ResponsiveContainer, PieChart, Cell } from 'recharts'
import { Container } from './styles';

interface IRechartPieProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const RechartPie: React.FC<IRechartPieProps> = ({ data }) => {
    return (
        <Container>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="percent"
                    >
                        {
                            data.map(indicator => (
                                <Cell key={indicator.name} fill={indicator.color}/>
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

        </Container>
    )
}

export default RechartPie;