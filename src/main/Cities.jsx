import React,{useState} from "react";
import CityData from "./CityData";
import ListCity from "./ListCity";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

const Cities=()=>{

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
        <div className="city_main">
        <div className="city_container">
            {
                CityData.map((val)=>{
                    return(
                        <ListCity
                            key={val.id}
                            cityname={val.cityname}
                            citysf={val.citysf}
                        />
                    )
                })
            }
            <div className="city"><h4 className="main_color">All Cities</h4><p><ExpandMoreIcon className="main_color" onClick={handleClickOpen}/></p></div>
        </div>
        </div>

        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Select City Book to</DialogTitle>
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

export default Cities;