import React, {useState} from "react";
import Cities from "./Cities";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CityOption from "./CityOptions";
import BookFromCityData from "./BookFromCityData";


const Main=()=>{

    const [open, setOpen] = useState(false);
    const [city, setCity] = useState('San Francisco');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
        setOpen(false);
        }
    };


    return(
        <>
            <div className="main">
            <div className="form">
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" 
                    >
                        <FormControlLabel value="roundTrip" control={<Radio color="secondary"/>} label="Round Trip"  />
                        <FormControlLabel value="One Way" control={<Radio color="secondary"/>} label="One Way" />
                        <FormControlLabel value="Multi City" control={<Radio color="secondary"/>} label="Multi City" />
                    </RadioGroup>
                </FormControl>
            </div>
                <div>
                <h2>Book from <span className="main_color">{city}<IconButton size="small"><ExpandMoreIcon onClick={handleClickOpen}  className="main_color"/></IconButton></span><span className="dis_mobile">to</span></h2>
                </div>
                <Cities/>
            </div>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Select City Book From</DialogTitle>
            <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="demo-dialog-native">Select City</InputLabel>
                <Select
                    native
                    value={city}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select City" id="demo-dialog-native" />}>
                    <option aria-label="None" value="">{city}</option>
                    {BookFromCityData.map((val)=>{
                        return(
                            <CityOption
                                value={val.value}
                                city={val.city}
                            />
                        );
                    })}
                </Select>
                </FormControl>
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default Main;