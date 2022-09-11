import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import MemeGenerate from './memeComponents/MemeGenerate';
import MemePreview from './memeComponents/MemePreview';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import MemeImageDataContext from "./memeComponents/memeimage-context";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function App() {

  const [selectedMemeImageData,setSelectedMemeImageData] = React.useState([]);
  const imageData = [selectedMemeImageData,setSelectedMemeImageData];
  const [memeTextDescription,setMemeTextDescription] = React.useState([]);
  const memeTextValue = [memeTextDescription,setMemeTextDescription];

  const anchor= "right";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    if(memeTextDescription.length === 0){
      setOpen(true);
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MEME GENERATOR
        </p>
        <PreviewOutlinedIcon sx={{ fontSize: 60 }} onClick={toggleDrawer(anchor, true)}/>
      </header>
      <MemeImageDataContext.Provider value={{imageData,memeTextValue}}>
      <SwipeableDrawer
            PaperProps={{
              sx: { width: "95%" },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
           <MemePreview />
      </SwipeableDrawer>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Kindly Enter your Meme Text 
      </Alert>
    </Snackbar>
      <MemeGenerate name="Ram Kumar"></MemeGenerate>
      </MemeImageDataContext.Provider>
    </div>
  );
}

export default App;