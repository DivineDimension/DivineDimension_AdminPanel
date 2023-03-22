import React, { Component } from 'react';
import Doughnut from 'react-apexcharts';

class AreaChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            series1: [87, 13],
            labels: ['Circulating Supply', 'Locked Supply'],
            options1: {
                chart: {
                    height: 350,
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
                    enabled: false,
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
            },
            options2: {
                chart: {
                    height: 350,
                    type: 'area',
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
                colors: ['rgba(59,130,246,0.5)'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight',
                    width: 1,
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
        };
    }
    
    render() {
        return (
            (typeof window !== 'undefined') &&
                <Doughnut
                    options={this.state.options1}
                    series={this.state.series1}
                    type="donut"
                    height={250}
                />
        );
    }
}

export default AreaChart