import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards = ({data:{jumlahKasus, meninggal, sembuh, perawatan}}) => {
    if(!jumlahKasus){
        return 'Loading..'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Terinfeksi
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={jumlahKasus} duration={1.5} separator="."/>
                        </Typography>
                        <Typography variant="body2">
                        Jumlah Kasus Aktif COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Sembuh
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={sembuh} duration={1.5} separator="."/>
                        </Typography>
                        <Typography variant="body2">
                        Jumlah orang yang sembuh dari COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Meninggal
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={meninggal} duration={1.5} separator="."/>
                        </Typography>
                        <Typography variant="body2">
                        Jumlah orang yang meninggal akibat COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.opname)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                       Dalam Perawatan
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={perawatan} duration={1.5} separator="."/>
                        </Typography>
                        <Typography variant="body2">
                        Jumlah orang yang sedang dirawat akibat COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;