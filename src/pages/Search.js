//import { Typography, Grid, Button, Card, CardContent } from '@mui/material';
//import { typography } from '@mui/system';
import React from 'react';
//import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults';

const Search = ({searchResults, setRestId}) => {
    //const people = ["Eddie", " Abby", "Mary", "Alfredo", "Angel", "Zaira"]
    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expensiveFood = searchResults.filter((value) => value.price === "$$$")

    return (
        <>
                <SearchResults food={cheapFood} title = {"Cheap Food"} setRestId={setRestId} />
                <SearchResults food={moderateFood} title = {"Moderate Food"} setRestId={setRestId}/>
                <SearchResults food={expensiveFood} title = {"Expensive Food"} setRestId={setRestId}/> 

        </>
    )
}

export default Search