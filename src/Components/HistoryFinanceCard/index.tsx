import React from 'react'
import { Container, Tag } from './styles'

interface IHistoryFinanceCard {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({ amount, subTitle, tagColor, title }) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>
            </div>
            <h3>{amount}</h3>

        </Container>
    )
}

export default HistoryFinanceCard