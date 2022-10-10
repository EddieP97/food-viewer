import { Typography, Grid, Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const Search = () => {

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
                <Typography variant="h2">I am The Search Page</Typography>
            </Grid>
            <Grid item xs={6} md={2}>Hello</Grid>
            <Grid item xs={6} md={2}>Eddie</Grid>
            <Grid item xs={6} md={2}>Abby</Grid>
            <Grid item xs={6} md={2}>Mary</Grid>
            <Grid item xs={6} md={2}>Alfredo</Grid>

        </Grid>

        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/TestGrid" variant="outlined">Back</Button>
        </>
    )
}

export default Search