import React, { useContext,useEffect } from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import MemeImageContext from "./memeimage-context";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MemeImage(props) {
    const item = props.data;
    const [open, setOpen] = React.useState(false);
    const [toggleSelected, setToggleSelected] = React.useState(false);

    const {imageData} = useContext(MemeImageContext);
    const [selectedMemeImageData] = imageData;

    const toggleSelectedMemeImage = (item) => {
      if(toggleSelected !== true && selectedMemeImageData.length === 4 ){
        console.log("cannot be toggled");
        setOpen(true);
        return;
      }
      props.updateSelectedMemeImage(item);
      setToggleSelected(!toggleSelected);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    useEffect(() => {
      if(selectedMemeImageData.filter((data) => data.name === item.name).length>0)
        setToggleSelected(!toggleSelected);
    }, []);

    return (
      <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Maximum 4 images can be selected to create a Meme!
        </Alert>
      </Snackbar>
      <ImageListItem key={item.name}
      onClick={()=>{toggleSelectedMemeImage(item)}}>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <ImageListItemBar
      subtitle={item.category}
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(22, 215, 0, 0.54)' }}
          aria-label={`info about ${item.title}`}
        >
          {toggleSelected?<DoneIcon/>:<InfoIcon/>}
        </IconButton>
      }
    />
    </ImageListItem>
    </>
    );
  }