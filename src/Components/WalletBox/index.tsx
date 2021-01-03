import React, { useMemo } from 'react';
import { Container } from './styles';
import CountUp from 'react-countup'

import ArrowDownImg from '../../Assets/arrow-down.svg';
import DollarImg from '../../Assets/dolar.svg';
import ArrowUpImg from '../../Assets/arrow-up.svg';

interface IWalletBox {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}



const WalletBox: React.FC<IWalletBox> = ({ title, amount, icon, footerLabel, color }) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return DollarImg;
            case 'arrowUp':
                return ArrowUpImg;
            case 'arrowDown':
                return ArrowDownImg;
            default:
                return undefined;
        }
    }, [icon])

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1><CountUp end={amount} prefix={"R$ "} separator="." decimal="," decimals={2}/></h1>
            <small>{footerLabel}</small>
            {iconSelected && <img src={iconSelected} alt={title} />}
        </Container>
    )
}

export default WalletBox