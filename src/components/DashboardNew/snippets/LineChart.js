import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class AreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series1: [
              {
                  name: "",
                  data: [146, 184, 178, 192, 166]
              }
            ],
            series2: [
              {
                  name: "",
                  data: [146, 184, 178, 192, 166]
              }
            ],
            options1: {
                chart: {
                    height: 350,
                    type: 'line',
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
                    curve: 'smooth',
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
                grid: {
                    borderColor: 'rgba(255,255,255,0.2)',
                    row: {
                    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 1
                    },
                    xaxis: {
                      lines: {
                          show: false
                      }
                    },   
                    yaxis: {
                        lines: {
                            show: false
                        }   
                    },  
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['15', '13', '18', '10', '60'],
                    title: false,
                    labels: {
                        show: false,
                        style:{
                            colors: '#AAAAAA'
                        }
                    }
                },
                yaxis: {
                    title: false,
                    labels: {
                        show: false,
                        formatter: function (value) {
                            return value.toLocaleString() + ".00"
                        },
                        style:{
                            colors: '#AAAAAA'
                        }
                    }
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
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                      },
                  },
                grid: {
                    borderColor: 'rgba(255,255,255,0.2)',
                    row: {
                    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 1
                    },
                    xaxis: {
                      lines: {
                          show: false
                      }
                    },   
                    yaxis: {
                        lines: {
                            show: false
                        }   
                    },  
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['15', '13', '18', '10', '60'],
                    title: false,
                    labels: {
                        show: false,
                        style:{
                            colors: '#AAAAAA'
                        }
                    }
                },
                yaxis: {
                    title: false,
                    labels: {
                        show: false,
                        formatter: function (value) {
                            return value.toLocaleString() + ".00"
                        },
                        style:{
                            colors: '#AAAAAA'
                        }
                    }
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
                <Chart
                    options={this.state.options1}
                    series={this.state.series1}
                    type="line"
                    height={150}
                />
        );
    }
}

export default AreaChart