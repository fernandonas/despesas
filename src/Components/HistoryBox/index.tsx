import React from 'react';
import { Container } from './styles';

interface IHistoryBoxProps {
    data: {
        monthNumber: number;
        month: string;
        amountEntry : number;
        amountOutput : number;
    }[]
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput}) => {
    return(
        <Container>
            <h2>Histórico de saldo.</h2>
            
        </Container>
    )
}

export default HistoryBox;