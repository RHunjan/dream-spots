import React, {useEffect, useState} from "react";
import CategoryFilter from "../components/CategoryFilter";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VacationCard from "../components/VacationCard";

//TODO- call an api to get vacations List
const vacations  = [
    {city: 'Las Vegas',
     country: 'USA',
     temperature: '22',
     description: 'Las Vegas is awesome place to visit', 
     image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
    },
    {city: 'Las Vegas',
     country: 'USA',
     temperature: '22',
     description: 'Las Vegas is awesome place to visit', 
     image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
    },
    {city: 'Las Vegas',
     country: 'USA',
     temperature: '22',
     description: 'Las Vegas is awesome place to visit', 
     image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
    },
    {city: 'Las Vegas',
     country: 'USA',
     temperature: '22',
     description: 'Las Vegas is awesome place to visit', 
     image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
    },
]

const userInfo = {
    userName: 'Neet',
    email: 'neet@gmail.com',
    password: '*****',
    savedSpots:[ 
        {city: 'Las Vegas',
        country: 'USA',
        temperature: '22',
        description: 'Las Vegas is awesome place to visit', 
        image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
        },
        {city: 'Las Vegas',
        country: 'USA',
        temperature: '22',
        description: 'Las Vegas is awesome place to visit', 
        image: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536'
        }
    ]
}
const FrontPage = ({type}) => {
    //Todo - call api here to get vacations list. Use Axios.get(url) to call API.   
    const [vacationsList, setVacationsList] = useState([]);
    useEffect(() => {
        if(type === 'userFavorites'){
            setVacationsList(userInfo.savedSpots)
        }
        if(type === 'vacations')
        {
            setVacationsList(vacations)
        }
    }, [type])

    return (<Box>
                <CategoryFilter />
                <Grid container sx={{padding: 'auto'}}>      
                    {vacationsList.map((vacation, i) => 
                        <VacationCard type={type} key={i} vacation={vacation} />
                    )}
                </Grid>
            </Box>)
}

export default FrontPage;