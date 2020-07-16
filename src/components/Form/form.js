import React, { Component } from "react";
import axios from "axios";
import BodyPane from "../body/bodypaneview";

class Form extends Component {
  constructor(props){
    super(props)
     this.state = {
       data: [],
       temperature: "",
       cityName: "",
       apiKey: "7733cf409739e72dc2741f7677dcb531",
       currentCity: '',
       country: '',
       weatherDesc: ''
     };
  }
  // handles the change of inputs and sets the state accordingly;
  handleChange = (event) => {
      const city = event.target.value;
        this.setState({
            cityName: city,
        });
  }

  style= {
    color: 'green',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  }

// Here is the section that handles the submission of data,
// It returns an object containing the current weather information of the city;
  handleSubmit = (event) => {
    event.preventDefault();
    const error = document.getElementById('error');
    const nothingToDisplay = document.getElementById('nothingToDisplay');

    if(this.state.cityName === ''){
      error.textContent = "city name cannot be empty";
      this.setState({
        data: []
      })
    }else {
      error.innerText = "";
      nothingToDisplay.textContent = '';
      axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q= " +
        `${this.state.cityName}` +
        "&units=metric&appid=" +
        `${this.state.apiKey}`
      ).then((info) => {
        this.setState({
          data: info,
          weatherDesc: info.data.weather[0].description,
          currentCity: info.data.name,
          country: info.data.sys.country
        })
      })
        .catch(err => {
          error.textContent = 'An error occured';
          nothingToDisplay.textContent = "there is currently no data to display"
          this.setState({
            data: []
          })
          setTimeout(() => {
            error.textContent = "";
            nothingToDisplay.textContent = "";
          }, 4000);
        });
    };
  };

  dataChange = ()=>{
    const { data } = this.state;
    if(data.length !== 0){
        return <BodyPane temp={this.state.temperature} currentCity={this.state.currentCity} country={this.state.country} desc={this.state.weatherDesc} />
    } else{
      return " "
    }
  }

}

export default Form;
