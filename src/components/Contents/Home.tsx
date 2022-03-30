import React from 'react';
import { useHistory } from "react-router-dom";
import About from './About_us';
import Features from './Features';
import Join from './Join';
import Your_plan from './Your_plan';

const Home = (props: any) => {

    const history = useHistory();

    return (
        <div>
            <About />
            <Features/>
            <Your_plan/>
            <Join/>
        </div>
    );
}
export default Home;
