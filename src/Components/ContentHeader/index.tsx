import React from 'react'
import {
    Container,
    Controller,
    TitleContainer
} from './styles'

interface IContentReaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentReaderProps> = ({title, lineColor, children}) => {   

    return(
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controller>
                {children}
            </Controller>
        </Container>
    )
}

export default ContentHeader