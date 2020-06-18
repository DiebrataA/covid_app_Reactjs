import axios from 'axios';

const url = "https://indonesia-covid-19.mathdro.id/api";

export const fetchData = async () => {
    try{
        const {data: {jumlahKasus, meninggal, sembuh, perawatan}} = await axios.get(url);
        
       return {jumlahKasus, meninggal, sembuh, perawatan}    
    } catch(error){
        return error
    }
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(url + '/harian');
        // console.log(data.data)
        const modifiedData = data.data.map((dailyData) => ({
            jumlahKasusMeninggalperHari: dailyData.jumlahKasusMeninggalperHari,
            jumlahKasusBaruperHari: dailyData.jumlahKasusBaruperHari,
            tanggal: dailyData.tanggal,
            pembaruanTerakhir: dailyData.pembaruanTerakhir
        }));
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchProvince = async () =>{
    try{
        const {data:{data}} = await  axios.get(url + '/provinsi');
        return data.map((provinsi) => provinsi.provinsi);
    }catch(error){
        console.log(error);
    }
}

// export const fetchUpdate = async () => {
//     try{
//         const {data} = await axios.get(url + '/harian');
//         console.log(data.data) 
    
//     } catch(error){
//         return error
//     }
// }