import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography} from '@mui/material'
import React from 'react'
//import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useNavigate } from 'react-router-dom';
import SignalCellular1BarRoundedIcon from '@mui/icons-material/SignalCellular1BarRounded';
import SignalCellular2BarRoundedIcon from '@mui/icons-material/SignalCellular2BarRounded';
import SignalCellular3BarRoundedIcon from '@mui/icons-material/SignalCellular3BarRounded';
import SignalCellular4BarRoundedIcon from '@mui/icons-material/SignalCellular4BarRounded';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const SearchResults = ({food, title, setRestId }) => {

    const navigate = useNavigate()
    const goToDetails = (id) => {
        setRestId(id)
        navigate("/detail")
    }

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
                                        {value.location.city}, {value.location.state} {" "}
                                        {value.location.zip_code} <br/>
                                        <b>{value.display_phone}</b>
                                        </Typography>
                                        <Typography>
                                        <Rating name="half-rating-read" defaultValue={value.rating} precision={0.5} readOnly />
                                        ({value.review_count}) <br/>

                                        
                                        {
                                            value.transactions.map( (value2, index2) => {
                                                return(
                                                    
                                                    <Typography display="inLine">
                                                        {
                                                            (value2 === "delivery")?(
                                                                <DeliveryDiningIcon/>
                                                            ):(
                                                                <></>
                                                            )
                                                        }
                                                        {
                                                            (value2 === "pickup")?(
                                                                <TakeoutDiningIcon/>
                                                            ):(
                                                                <></>
                                                            )
                                                        }
                                                        {
                                                            (value2 === "restaurant_reservation")?(
                                                                <BookOnlineIcon/>
                                                            ):(
                                                                <></>
                                                            )
                                                        }
                                                        
                                                    </Typography>
                                                )
                                            }

                                            )
                                        }
                                        </Typography>
                                        <Typography>
                                        {
                                            (value.review_count <= 100)?(
                                                <SignalCellular1BarRoundedIcon/>
                                            ):(
                                                <></>
                                            ) 
                                        }
                                        {
                                            (value.review_count >= 101 && value.review_count <= 500)?(
                                               <SignalCellular2BarRoundedIcon/> 
                                            ):(
                                                <></>
                                            )
                                        }
                                        {
                                           (value.review_count >= 501 && value.review_count <= 1000)?(
                                            <SignalCellular3BarRoundedIcon/>
                                        ):(
                                            <></>
                                        ) 
                                        }
                                        {
                                            (value.review_count >= 1001)?(
                                                <SignalCellular4BarRoundedIcon/>
                                            ):(
                                                <></>
                                            )
                                        }
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={(e) => goToDetails(value.id)}>Details</Button>
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