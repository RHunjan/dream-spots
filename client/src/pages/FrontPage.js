import React, {useEffect, useState} from "react";
import CategoryFilter from "../components/CategoryFilter";
import VacationCard from "../components/VacationCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_SPOTS } from '../utils/queries';

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
const FrontPage = ({type, isAuth}) => {
    const navigate= useNavigate();

    const { loading, data } = useQuery(QUERY_SPOTS);

    console.log(data);
    //const spots = data?.spots || [];

    //Todo - call api here to get vacations list. Use Axios.get(url) to call API.   
    const [vacationsList, setVacationsList] = useState([]);
    useEffect(() => {
        if(type === 'userFavorites'){
            setVacationsList(userInfo.savedSpots)
        }
        if(type === 'vacations')
        {   
            if(data?.spots?.length)
            setVacationsList(data.spots)
        }
    }, [type])

    useEffect(() => {
        if(!isAuth){
            navigate('/')
        }
    }, [navigate, isAuth])
    return (<div className="wrapper">
                <CategoryFilter />
                <main>    
                    <div id="spot-cards" className="fade-in-delay">
                    { vacationsList.length > 0 && vacationsList.map((vacation, i) => 
                        <VacationCard type={type} key={i} vacation={vacation} />
                    )}
                    </div>
                </main>  
            </div>)
}

export default FrontPage;