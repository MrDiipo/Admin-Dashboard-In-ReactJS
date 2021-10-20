import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}

export default Home
