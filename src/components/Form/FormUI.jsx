import React, {useState} from 'react';
import {Box, Button, OutlinedInput, FormControl, InputLabel} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import BodyPane from "../body/bodypaneview";
import axios from "axios";
import useStyle from "./style";

const FormUI = () => {
        const classes = useStyle();
        const [state, setState] = useState({
            data: [],
            temperature: "",
            cityName: "",
            apiKey: "7733cf409739e72dc2741f7677dcb531",
            currentCity: '',
            country: '',
            completed: false,
            weatherDesc: ''
        })
        const handleChange = (event) => {
            const city = event.target.value;
              setState({
                  cityName: city,
              });
              console.log(state)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const error = document.getElementById('error');
            const nothingToDisplay = document.getElementById('nothingToDisplay');
            // const loader = document.getElementById('loader');
        
            if(state.cityName === ''){
              error.textContent = "city name cannot be empty";
              setState({
                data: []
              })
            }else {
              error.innerText = "";
              nothingToDisplay.textContent = '';
              axios.get(
                "https://api.openweathermap.org/data/2.5/weather?q= " +
                `${state.cityName}` +
                "&units=metric&appid=" +
                `${state.apiKey}`
              ).then((info) => {
                setState({
                completed: true,
                  data: info,
                  weatherDesc: info.data.weather[0].description,
                  currentCity: info.data.name,
                  country: info.data.sys.country,
                  temperature: info.data.main.temp
                })
              })
                .catch(err => {
                  error.textContent = 'An error occured';
                  nothingToDisplay.textContent = "there is currently no data to display"
                  setState({
                    data: []
                  })
                  setTimeout(() => {
                    error.textContent = "";
                    nothingToDisplay.textContent = "";
                  }, 4000);
                });
            };
          };
        
         const dataChange = ()=>{
            const { data, temperature, currentCity, country, weatherDesc } = state;
            console.log(data);
                return <BodyPane temp={temperature} currentCity={currentCity} country={country} desc={weatherDesc} />
          }
        return (
            <Box>
                <div className={classes.div}>
                <FormControl className={classes.form}>
                    <InputLabel htmlFor="cityName">city name</InputLabel>
                        <OutlinedInput className={classes.input} type="text" id="cityName" label="city name" onChange={handleChange}  />
                        <Button variant="contained" className={classes.btn} onClick={handleSubmit}>
                            <Search />
                        </Button>
                </FormControl>
                </div>
                <p id='error' className="inputerror"></p>
                <p id="nothingToDisplay" className={classes.style}> </p>
                {state.completed === true ? dataChange() : ""}
            </Box>
        );
}

export default FormUI;