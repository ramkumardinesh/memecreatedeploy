import { Typography } from "@mui/material";
import React, { useContext } from "react";
import MemeImageContext from "./memeimage-context";
import SwipeableMemeTemplate from "./SwipableMemeTemplate";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';


function MemePreview(props){
    const {imageData} = useContext(MemeImageContext);
    const [selectedMemeImageData] = imageData;
    const {memeTextValue} = useContext(MemeImageContext);
    const [memeTextDescription] = memeTextValue;
        
    const [alignment, setAlignment] = React.useState('top');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    
      
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
        >
        <div>Total Meme Images Selected : {selectedMemeImageData.length} [Maximum 4]</div>
        <Typography variant="h5" sx={{
            alignContent: 'center',
            justifyContent: 'center',
            display: 'inline-grid'
        }}> Text Position </Typography> 
        <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        >
            
      <ToggleButton value="top" aria-label="left aligned">
        <Typography>Top</Typography>
      </ToggleButton>
      <ToggleButton value="bottom" aria-label="centered">
      <Typography>Bottom</Typography>
      </ToggleButton>
      </ToggleButtonGroup>
      <hr/>
        {selectedMemeImageData.length > 0 ?
            <SwipeableMemeTemplate images={selectedMemeImageData} memeTextDescription={memeTextDescription} textPosition={alignment}/>
            :
            <div>No Images Selected</div>
        }
        </Box>
    )
}

export default MemePreview;