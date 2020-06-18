import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchProvince} from '../../api'

const CountryPicker = () => {
    const [fetchedProvince, setFetchedProvince] = useState([]);
    useEffect(() =>{
        const fetchProvinceAPI = async () =>{
            setFetchedProvince(await fetchProvince);
        }

        fetchProvinceAPI();
    }, 
    [setFetchedProvince] );

//    console.log(fetchedProvince)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value ="global">Gloval</option>
                {fetchedProvince.map((provinsi, i)=> <option key={i} value={provinsi}>{provinsi}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;