import React from 'react'
import Header from './header/Header'
import Main from './pages/Main'

import {Container} from 'reactstrap'

const App = () => (
    <div>
        <Header/>
        <div>
            <Container>
                <Main/>
            </Container>
        </div>
    </div>
)

export default App
