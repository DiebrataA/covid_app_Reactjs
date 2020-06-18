import React from 'react';
import styles from './App.module.css'
import {Cards, Chart, CountryPicker } from './components'
import {fetchData} from './api';
import Logo from './assets/logo.jpeg'

class App extends React.Component {
  state ={
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})


  }

  render(){
    const {data} = this.state;
    return(
      <div className={styles.container}>
        <div>
        <img src={Logo}/> 
        </div>
        <Cards data={data}/>
        <h4>Kasus Sembuh dan Meninggal perhari</h4>
        <Chart />
        
      </div>
    )
  }
}

export default App;