import React from 'react';
import { Container, ChartContainer, Header, LegendContainer, Legend } from './styles';
import * as Rechart from 'recharts';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
};

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) =>
(
    <Container>
        <Header>
            <h2>Historico de saldo</h2>
            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>
        <ChartContainer>
            <Rechart.ResponsiveContainer>
                <Rechart.LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5, }}
                >
                    <Rechart.CartesianGrid strokeDasharray="3 3" />
                    <Rechart.XAxis dataKey="month" />
                    <Rechart.YAxis />
                    <Rechart.Tooltip />
                    <Rechart.Legend />
                    <Rechart.Line
                        name="Entradas"
                        type="monotone"
                        dataKey="amountEntry"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />
                    <Rechart.Line
                        name="Saídas"
                        type="monotone"
                        dataKey="amountOutput"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />
                </Rechart.LineChart>
            </Rechart.ResponsiveContainer>
        </ChartContainer>
    </Container>
);

export default HistoryBox;