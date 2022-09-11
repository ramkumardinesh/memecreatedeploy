import React, { useContext, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MemeImage from './MemeImage';
import MemeImageContext from "./memeimage-context";

export default function MemeImageRepo(props) {
    const [categoryValue, setCategoryValue] = React.useState([memeCategory[0]]);
    const [inputValue, setInputValue] = React.useState('');
    const [memeImageData,setMemeImageData] = React.useState([]);

    const {imageData} = useContext(MemeImageContext);
    const [selectedMemeImageData,setSelectedMemeImageData] = imageData;

    const handleAutoSearch = (event) => {
        console.log(event.target.checked);
        console.log(selectedMemeImageData);
    };
    
    const updateSelectedMemeImage = (key) => {
        // Selected Status of a Key track in Stat
        if(selectedMemeImageData.indexOf(key) === -1){
                setSelectedMemeImageData([...selectedMemeImageData,key])
        }else{
                setSelectedMemeImageData(selectedMemeImageData.filter(
                (imagedata) => imagedata.name !== key.name ));
        }
    };
    
    useEffect(() => {
        console.log(categoryValue);
        if(categoryValue.length === 0){
            setMemeImageData(memeData);
        }else{
        setMemeImageData(memeData.filter(meme => {
            return categoryValue.includes(meme.category) 
        }));
        }
    }, [categoryValue]);

    return (
        <>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Meme Image Repository
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControlLabel
                value="autoSearch"
                control={<Switch 
                            color="primary" 
                            onChange={handleAutoSearch} />
                        }
                label="Auto Search"
                labelPlacement="end"
                />
                </Grid>
            </Grid>
            <Autocomplete
                multiple
                value={categoryValue}
                onChange={(event, newValue) => {
                    setCategoryValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="tags-standard"
                options={memeCategory}
                defaultValue={memeCategory}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Search By Category"
                    placeholder="Search Category"
                />
                )}
            />
      <Box sx={{height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={4}>
        {memeImageData.map((item) => (
          <MemeImage key={item.name} data={item} updateSelectedMemeImage={updateSelectedMemeImage}/>
        ))}
      </ImageList>
    </Box>
    </>
    );
  }
  
  /* API SERVICE BASED DATA */
  const memeData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      name: "1",
      category: 'Sircastic',
      tags: ['unknown','clever','hint']
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      name: "2",
      category: 'Motivation',
      tags: ['energy','start','begin','motivate','push']
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      name: "3",
      category: 'Motivation',
      tags: ['energy','start','begin','motivate','push']
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      name: "4",
      category: 'Funny',
      tags: ['giggle','fun','enjoy']
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      name: "5",
      category: 'Exciting',
      tags: ['giggle','fun','enjoy']
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      name: "6",
      category: 'Happy',
      tags: ['enjoy','happy','delighted']
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      name: "7",
      category: 'Funny',
      tags: ['giggle','fun','enjoy']
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      name: "8",
      category: 'Exciting',
      tags: ['enjoy','happy','delighted']
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      name: "9",
      category: 'Happy',
      tags: ['enjoy','happy','delighted']
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      name: "10",
      category: 'Funny',
      tags: ['giggle','fun','lol']
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      name: "11",
      category: 'Happy',
      tags: ['enjoy','happy','delighted']
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      name: "12",
      category: 'Funny',
      tags: ['giggle','fun','lol']
    },
  ];

/* API SERVICE BASED DATA */
const memeCategory = ['Funny','Sad','Happy','Exciting','Angry','Motivation','Sircastic'];