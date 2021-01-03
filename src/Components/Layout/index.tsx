import React from 'react'
import Aside from '../Aside/Index'
import Content from '../Content/Index'
import MainHeader from '../MainHeader/Index'
import { Grid } from './styles'

const Layout: React.FC = ({children}) => {
    return(
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Grid>
    )
}

export default Layout