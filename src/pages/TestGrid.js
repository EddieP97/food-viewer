import { People } from '@mui/icons-material';
import { Typography, Grid, Button, Card, CardContent,  } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


const TestGrid = () => {
    const people = ["Eddie", " Abby", "Mary", "Alfredo", "Angel", "Zaira"]
    return (
        <>
        
        <Grid container spacing={2}>


            {
                people.map(
                    (value) => {
                        return (
                            <Grid item xs={6} md={2}>
                                <Card>
                                    <CardContent>{value}</CardContent>
                                </Card>
                            </Grid>  
                        )
                    }
                )
            }
            

        </Grid>

        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/search" variant="outlined">Search</Button>
        </>
    )
}

export default TestGrid