import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchApiDaily = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchApiDaily();
    }, []);

    // var updateAkhir = dailyData
    // var citrus = updateAkhir.slice(1,3);
    // console.log(dailyData[0])

    const lineChart =(
        dailyData.length ? (
        <Line 
            data={{
                labels:dailyData.map(({tanggal}) => new Date(tanggal).toDateString()),
                datasets: [{
                    data: dailyData.map(({jumlahKasusBaruperHari}) => jumlahKasusBaruperHari),
                    label: 'Terinfkesi',
                    borderColor: '#3333ff',
                    fill:'true'
                },{
                    data: dailyData.map(({jumlahKasusMeninggalperHari}) => jumlahKasusMeninggalperHari),
                    label: 'Meninggal',
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:'true'
                }],
            }} 
            />): null
    );

  
    return (
        <div className={styles.container}>
            {/* <h4>Last Update {dailyData.map(({pembaruanTerakhir}) => new Date(pembaruanTerakhir).toDateString())}</h4> */}
           {lineChart   }
        </div>
    )
}

export default Chart;