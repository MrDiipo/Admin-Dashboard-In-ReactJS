import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    
    const data = [
        {
          name: 'Jan',
          "Active User" : 4000,
        },
        {
            name: 'Feb',
            "Active User" : 200,
        },
        {

            name: 'Mar',
            "Active User" : 1300,
        },
        {
            name: 'Apr',
            "Active User" : 1000,
        },
        {
            name: 'May',
            "Active User" : 4000,
        },
        {
            name: 'Jun',
            "Active User" : 2400,
        },
        {
            name: 'Jul',
            "Active User" : 4500,
        },
        {
            name: 'Aug',
          "Active User" : 2500,
        },
        {
            name: 'Sep',
          "Active User" : 2000,
        },
        {
            name: 'Oct',
          "Active User" : 3500,
        },
        {
            name: 'Nov',
          "Active User" : 5000,
        },
        {
            name: 'Dec',
          "Active User" : 400,
        }
      ];

    return (
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf"/>
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart
