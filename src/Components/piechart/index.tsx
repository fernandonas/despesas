import React from 'react';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles'
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';

const Piecharts: React.FC = () => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <Legend>
                    <div>5%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>
        <SideRight>
                <PieChart>
                    <Pie
                        data={[]}
                        labelLine={false}
                        dataKey='percent'  
                    >
                        {}
                    </Pie>
                </PieChart>
        </SideRight>

    </Container>
)

export default Piecharts;