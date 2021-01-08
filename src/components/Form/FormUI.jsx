import React, {useState} from 'react';
import {Search} from "@material-ui/icons";
import BodyPane from "../body/bodypaneview";
import axios from "axios";
import Loader from 'react-loader-spinner'
import {Div, Input, Form, Button, P} from "./style";

const FormUI = () => {
        const apiKey = "7733cf409739e72dc2741f7677dcb531";
        const [state, setState] = useState({
            temperature: "",
            cityName: "",
            currentCity: '',
            country: '',
            weatherDesc: '',
            isloading: ''
        })
        const handleChange = (event) => {
            const city = event.target.value;
              setState({
                  cityName: city,
              });
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const error = document.getElementById('error');
            const nothingToDisplay = document.getElementById('nothingToDisplay');
            if(!state.cityName){
              error.textContent = "city name cannot be empty";
            }else {
              error.innerText = "";
              nothingToDisplay.textContent = '';
              setState({
                isloading: 'loading'
              })
              axios.get(
                "https://api.openweathermap.org/data/2.5/weather?q= " + `${state.cityName}` + "&units=metric&appid=" + `${apiKey}`
              ).then((info) => {
                setState({
                  weatherDesc:info.data.weather[0].description,
                  currentCity:info.data.name,
                  country: info.data.sys.country,
                  temperature: info.data.main.temp,
                  isloading: 'done'
                })
              })
                .catch(err => {
                  error.textContent = 'An error occured';
                  nothingToDisplay.textContent = "there is currently no data to display"
                  setTimeout(() => {
                    error.textContent = "";
                    nothingToDisplay.textContent = "";
                    setState({
                      isloading: ''
                    })
                  }, 4000);
                });
            };
          };
        
         const dataChange = ()=>{
            const {  temperature, currentCity, country, weatherDesc } = state;
                return <BodyPane temp={temperature} currentCity={currentCity} country={country} desc={weatherDesc} />
          }

        return (
            <Div>
              <Form>
              <Input type="text" onChange={handleChange} placeholder="Enter city name" />
              <Button onClick={handleSubmit}><Search /></Button>
              </Form>
                <P id='error' style={{color: 'red'}}></P>
                <P id="nothingToDisplay"></P>
                {state.isloading === "done" ? dataChange() : state.isloading === "loading" ? <Loader style={{display: 'flex', justifyContent: 'center'}} type="Bars" color="#000000" height={30} width={30} timeout={3000} /> : "" }
            </Div>
        );
}

export default FormUI;