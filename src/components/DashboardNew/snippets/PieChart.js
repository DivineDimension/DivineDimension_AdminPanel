import React, {useState, useEffect} from 'react';
import Doughnut from 'react-apexcharts';

const PieChart = ({x}) => {    
    const series1 = [1,parseFloat(x/100)];
    const options1 = {
        chart: {
            height: 550,
            type: 'donut',
            toolbar: {
            show: false
            },
            stroke: {
                curve: 'straight'
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#55689e', '#2c3862'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth',
            width: 5,
            colors: ['#252525']
        },
        tooltip: {
            theme: 'dark',
            shared: true
        },
        title: {
            text: '',
            align: 'left'
        },
        markers: {
            size: 0
        },
        legend: {
            show: false
        }
    }
    
    return (
        (typeof window !== 'undefined') &&
            <Doughnut
                options={options1}
                series={series1}
                type="donut"
                height={250}
            />
    );
}

export default PieChart