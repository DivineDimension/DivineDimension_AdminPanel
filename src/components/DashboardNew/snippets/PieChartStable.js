import React, {useState, useEffect} from 'react';
import Doughnut from 'react-apexcharts';
import node from '../nodeapi.json';
import dashboardDetails from '../../Dashboard/stablecoin.json';

//const algosdk = require('algosdk');
const PieChart = () => {
    const [elemCir, setElemCir] = useState();
    const [reserve, setReserve] = useState();
    const [circulating, setCirculating] = useState();
    //const indexClient = new algosdk.Indexer("", node["indexerclient", ""]);
    const indexClient=""

    const elemID = dashboardDetails.elemID;

    useEffect(async() => {
        await elemGet()
    }, [elemCir, reserve, circulating]);  

    const elemGet = async () =>
    {
        let elemReserve = await indexClient.lookupAccountByID(dashboardDetails.elemReserveAddress).do();
        console.log("elemReserve", elemReserve);
        let elemL = elemReserve['account']['assets']['length'];
        for(let k = 0; k < elemL; k++)
        {
            if(elemReserve['account']['assets'][k]['asset-id'] === elemID)
            {
                setElemCir(elemReserve['account']['assets'][k]['amount']/1000000);
                console.log("elemCir", elemCir);
                break;
            }
        } 
    }

    const series1 = [99, 1];
    const options1 = {
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