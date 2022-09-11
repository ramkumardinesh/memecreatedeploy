import React, { useContext } from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MemeImageContext from "./memeimage-context";

const theme = createTheme({
    
  components: {
    MuiTextField: {
       styleOverrides: {
         root: {
            '& .MuiInput-underline:before': {
              borderBottomColor: 'green',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'green',
            },
         },
       },
     },
   },
 
 })

function MemeTextField(props){
    const CHARACTER_LIMIT = 60;
    // let [memeText,setMemeText] = useState("")
    const {memeTextValue} = useContext(MemeImageContext);
    const [memeTextDescription,setMemeTextDescription] = memeTextValue;
    const handleChange = (event) => {
      setMemeTextDescription(event.target.value);
    };

    return (
      <ThemeProvider theme={theme}>
           <TextField
          id="validation-standard-input"
          inputProps={{
            maxLength: CHARACTER_LIMIT,
            style: { fontSize: 18 }
          }}
          InputLabelProps={{
            style: { color: "green", fontSize: 20, borderColor: "green" }
          }}
          label={`Your Meme Message (${memeTextDescription.length}/${CHARACTER_LIMIT})`}
          multiline
          rows={3}
          value={memeTextDescription}
          onChange={handleChange}
          variant="standard"
          style ={{width: '80%'}}
          />
      </ThemeProvider>
    )
}

export default MemeTextField;