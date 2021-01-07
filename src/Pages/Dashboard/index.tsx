import React, { useState, useMemo } from 'react'
import { Container, Content } from './styles'
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../Components/SelectInput'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import listOfMonths from '../../Utils/months'
import WalletBox from '../../Components/WalletBox/'
import MessageBox from '../../Components/MessageBox'
import happy from '../../Assets/happy.svg'
import Sad from '../../Assets/sad.svg'
import grinning from '../../Assets/grinning.svg'
import BalanceGrafic from '../../Components/BalanceGrafic'
import HistoryBox from '../../Components/HistoryBox'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });

    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...gains, ...expenses].forEach(item => {
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
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);

                } catch (error) {
                    throw new Error('Inválid amount! Amount must be an number.')
                }
            }

        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);

                } catch (error) {
                    throw new Error('Inválid amount! Amount must be an number.')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {

            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getUTCFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += +gain.amount;
                    } catch (error) {
                        throw new Error('Amount entry is inválid. Must be valid number.')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += +expense.amount;
                    } catch (error) {
                        throw new Error('Amount output is inválid. Must be valid number.')
                    }
                }
            })
            return {
                monthNumber : month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        }).filter(item => {
                const currentMont = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                return (yearSelected === currentYear && item.monthNumber <= currentMont ) || (yearSelected < currentYear)

        });


    }, [yearSelected]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
                icon: Sad
            }
        } else if (totalBalance === 0) {
            return {
                title: 'Ufa!!',
                description: 'Neste mês, você gastou exatamente o que ganhou!',
                footerText: 'Tenha cuidado tente poupar no próximo mês!',
                icon: grinning
            }
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua Carteira está positiva!!',
                footerText: 'Continue assim considere investir seu saldo.',
                icon: happy
            }
        }
    }, [totalBalance]);

    const relationExpensesVsGains = useMemo(() => {
        const total = totalGains + totalExpenses
        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;
        
        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: isNaN(+percentGains.toFixed(1)) ? 0 : +percentGains.toFixed(1),
                color: '#F7931B'
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: isNaN(+percentExpenses.toFixed(1)) ? 0 : +percentExpenses.toFixed(1),
                color: '#E44C4E'
            },
        ]

        return data;

    }, [totalGains, totalExpenses]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        } catch (error) {
            throw new Error('Inválid Month value. Accept 0 - 24')
        }
    };

    const handleYearSelected = (month: string) => {
        try {
            const parseYear = Number(month);
            setYearSelected(parseYear)
        } catch (error) {
            throw new Error('Inválid Year value. Accept integers numbers')
        }
    };

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    onChange={e => handleMonthSelected(e.target.value)}
                    options={months}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    onChange={e => handleYearSelected(e.target.value)}
                    options={years}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas."
                    icon="dolar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas."
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas."
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox
                    icon={message.icon}
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                >
                </MessageBox>
                <BalanceGrafic data={relationExpensesVsGains}>

                </BalanceGrafic>
                <HistoryBox data={historyData} lineColorAmountEntry="#F7931B" lineColorAmountOutput="#E44C4E" />
            </Content>
        </Container>
    )
}

export default Dashboard 