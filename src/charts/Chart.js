import React, { useEffect, useState } from 'react'
import { Charts } from '../components/app.styles'
import { Chart as Chartjs } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

export default function ShowChart(props) {
    const [apiData, setApiData] = useState([])
    const url = `https://api.coingecko.com/api/v3/coins/${props.coinClicked}/market_chart?vs_currency=usd&days=30`
    console.log(url)

    async function GetData() {
        await axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        GetData()
    }, [props.coinClicked])

    const priceData = apiData?.prices?.map(el => el[1])
    const volumeLabels = apiData?.total_volumes?.map(el => new Date(el[0]).getDate().toString()).map(el => el.length === 1 ? `0${el}` : el)

    const data = {
        labels: volumeLabels?.slice(0, 30),
        datasets: [
            {
                label: props.coinClicked.toUpperCase(),
                lineTension: .5,
                backgroundColor: 'white',
                borderColor: 'white',
                fontStyle: "bold",
                fill: false,
                data: priceData?.slice(0, 30),
            }]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
            },
            layout: {
                padding: 1,
            },
            responsive: true,
            maintainAspectRatio: false,
        },
        elements: {
            point: {
                radius: 1,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                },
                ticks: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };
    return (
        <Charts>
            <Line data={data} options={options} />
        </Charts>
    )
}

