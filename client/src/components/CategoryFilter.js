import React from 'react'
import WavesIcon from '@mui/icons-material/Waves';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CategoryFilter = () => {
  return (
    <Box sx={{display: 'flex', margin: 'auto'}}>
        <Box sx={{width: '270px', margin: 'auto'}}>
            <Grid container>
                <Button>
                    <WavesIcon sx={{marginLeft: '10px', marginRight: '10px', cursor: 'pointer'}} />
                </Button>
                <Button>
                    <FilterHdrIcon sx={{marginLeft: '10px', marginRight: '10px', cursor: 'pointer'}}  />
                </Button>
                <Button>
                    <BeachAccessIcon sx={{marginLeft: '10px', marginRight: '10px' , cursor: 'pointer'}}  />
                </Button>
                <Button>
                    <LocationCityIcon sx={{marginLeft: '10px', marginRight: '10px' , cursor: 'pointer'}}  />
                </Button>
            </Grid>   
        </Box>   
    </Box>
  )
}

export default CategoryFilter