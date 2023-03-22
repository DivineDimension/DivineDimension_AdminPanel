import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import node from '../nodeapi.json';
import dashboardDetails from '../../Dashboard/stablecoin.json';
import axios from 'axios';

//const algosdk = require('algosdk');

const AreaChart = () => {
    const [treasury, setTreasury] = useState([]);
    const [treasuryTime, setTreasuryTime] = useState([]);

    const elemID = dashboardDetails.elemID;
// const baseServer = 'https://testnet-algorand.api.purestake.io/idx2';
// const port = '';

// const token = {
//    'X-API-Key': 'pOD5BAUCxq7InVPjo0sO01B0Vq4d7pD1ask5Ix43'}

//     const indexClient = new algosdk.Indexer(token, baseServer, port);
    //const indexClient = new algosdk.Indexer('', node['indexerclient'], '');
    const indexClient=""

    useEffect(async() => {
        await treasuryHistory()
    }, []);  

    const treasuryHistory = async () =>
    {
        let amountTreasury = [];
        let timeTreasury = [];
        let totaltx = await indexClient.lookupAccountTransactions(dashboardDetails.rebaseElemTreasury).do();
        // console.log(totaltx);
        let totaltxCount = totaltx['transactions']['length'];
        let l;
        if(totaltxCount <= 100)
        {
            l = totaltxCount;
        }
        else
        {
            l = 100;
        }
        let j = 0;
        for(let i = 0; i < l; i++)
        {
            if(totaltx['transactions'][i]['asset-transfer-transaction']['asset-id'] === elemID)
            {
                if(totaltx['transactions'][i]['asset-transfer-transaction']['receiver'] === dashboardDetails.rebaseElemTreasury)
                {   
                    if(j <= 20 && totaltx['transactions'][i]['asset-transfer-transaction']['amount'] < 184462045210)
                    {
                        amountTreasury.push(totaltx['transactions'][i]['asset-transfer-transaction']['amount'])
                        setTreasury(amountTreasury);
                        // console.log(amountTreasury);
                        timeTreasury.push(totaltx['transactions'][i]['round-time'])
                        setTreasuryTime(timeTreasury);
                        // console.log(timeTreasury);
                        j++;
                        // console.log("count");
                    }
                    else
                    {
                        break;
                    }
                }
            }
        }
        // for(let i = 0; i < l; i++)
        // {
        //     if(totaltx['transactions'][i]['asset-transfer-transaction']['asset-id'] === elemID)
        //     {
        //         if(totaltx['transactions'][i]['asset-transfer-transaction']['receiver'] === dashboardDetails.rebaseReserveAddress)
        //         {   
        //             if(j <= 20 && totaltx['transactions'][i]['asset-transfer-transaction']['amount'] < 184462045210)
        //             {
        //                 timeTreasury.push(totaltx['transactions'][i]['round-time'])
        //                 setTreasuryTime(timeTreasury);
        //                 console.log(timeTreasury);
        //                 j++;
        //                 // console.log("count");
        //             }
        //             else
        //             {
        //                 break;
        //             }
        //         }
        //     }
        // }
    }

    const series1 = [
        {
            name: "",
            data: [treasury[11]/1000000, treasury[10]/1000000, treasury[9]/1000000, treasury[8]/1000000, treasury[7]/1000000, treasury[6]/1000000, treasury[5]/1000000, treasury[4]/1000000, treasury[3]/1000000, treasury[2]/1000000, treasury[1]/1000000, treasury[0]/1000000]
        }
      ]
    const options1 = {
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
            categories: [new Date(treasuryTime[11]*1000), new Date(treasuryTime[10]*1000), new Date(treasuryTime[9]*1000), new Date(treasuryTime[8]*1000), new Date(treasuryTime[7]*1000), new Date(treasuryTime[6]*1000), new Date(treasuryTime[5]*1000), new Date(treasuryTime[4]*1000), new Date(treasuryTime[3]*1000), new Date(treasuryTime[2]*1000), new Date(treasuryTime[1]*1000), new Date(treasuryTime[0]*1000)],
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
                    return value.toLocaleString() + " ELEM"
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
    
        return (
            (typeof window !== 'undefined') &&
                <Chart
                    options={options1}
                    series={series1}
                    type="area"
                    height={150}
                />
        );
    
}

export default AreaChart