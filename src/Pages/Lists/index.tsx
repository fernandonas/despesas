import React, { useMemo, useState, useEffect } from 'react'
import { Container, Content, Filters } from './style'
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import formatCurrency from '../../Utils/formatCurrency'
import formatDate from '../../Utils/formatDate'
import listOfMonths from '../../Utils/months'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

    const movementType = match.params.type;   

    const pageData = useMemo(() => {
        return movementType === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#4E41F0',
                data: gains
            }
            :
            {
                title: 'Saídas',
                lineColor: '#E44C4E',
                data: expenses
            }
    }, [movementType])

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });

    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        const { data } = pageData;
        data.forEach(item => {
            const year = new Date(item.date).getFullYear()
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, [pageData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            const filtered = frequencyFilterSelected.filter(item => item !== frequency)
            setFrequencyFilterSelected(filtered);
        } else {
            setFrequencyFilterSelected(x => [...x, frequency]);
        }

    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        } catch (error) {
            throw new Error('Inválid Month value. Accept 0 - 24')
        }
    }

    const handleYearSelected = (month: string) => {
        try {
            const parseYear = Number(month);
            setYearSelected(parseYear)
        } catch (error) {
            throw new Error('Inválid Year value. Accept integers numbers')
        }
    } 

    useEffect(() => {
        const { data } = pageData;
        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency)
        });

        const formattedData = filteredData.map((item, index) => {
            return {
                id: String(index),
                description: item.description,
                amountFormated: formatCurrency(+item.amount),
                frequency: item.frequency,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4e',
            }
        })
        setData(formattedData)
    }, [monthSelected, yearSelected, frequencyFilterSelected, pageData])

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput onChange={e => handleMonthSelected(e.target.value)} options={months} defaultValue={monthSelected} />
                <SelectInput onChange={e => handleYearSelected(e.target.value)} options={years} defaultValue={yearSelected} />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                 </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                 </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            amount={item.amountFormated}
                            subTitle={item.dateFormated}
                            tagColor={item.tagColor}
                            title={item.description}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List