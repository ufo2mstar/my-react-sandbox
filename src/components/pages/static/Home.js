import React from 'react'
import {Container} from 'reactstrap'

import Sched from './Schedule'
// import About from './About'
import InpurGroupEg from './InputGroupTry'
import Prog from './Progress'

const Home = () => (
    <div>
        <Container>
            <h1 className="text-center">Don't panic!</h1>
            <Sched/>
            {/*<About/>*/}
            <InpurGroupEg/>
            <Prog/>
        </Container>
    </div>
)

export default Home
