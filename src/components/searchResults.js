import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
//import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const SearchResults = ({food, title}) => {

    return(
        <>
        {
            (food.length > 0) ? (
                <Typography variant="h3">{title}</Typography>
            ) : (
                <></>
            )
        }        
        <Grid container spacing={2} sx ={{pt: 2}}>
            {
                food.map(
                    (value, index) => {
                        return (
                            <Grid key={index} item xs={6} md={2}>
                                {/* <Card>
                                    <CardContent>
                                    {value.name}
                                    </CardContent>
                                </Card> */}


                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={value.image_url}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {value.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {value.location.address1} <br/>
                                        {value.location.city}, {value.location.state} <br/>
                                        Rating: {value.rating} ({value.review_count})
                                        </Typography>
                                        <Typography>
                                        
                                        <Rating name="half-rating-read" defaultValue={value.rating} precision={0.5} readOnly />
                                        ({value.review_count})
                                        </Typography>
                                        <Typography>
                                        <li>{value.transactions}</li>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                    </Card>
                            </Grid>  
                        )
                    }
                )
            }
        </Grid>
        
        </>

    )
}

export default SearchResults