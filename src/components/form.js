import React, { Component } from "react";
import axios from "axios";
import Body from "./bodyPane";

class Form extends Component {
  state = {
    temperature: "",
    cityName: "",
    apiKey: "7733cf409739e72dc2741f7677dcb531",
    currentCity: '',
    country: '',
    weatherDesc: ''
  };
  // handles the change of inputs and sets the state accordingly;
  handleChange = (event) => {
      const city = event.target.value;
        this.setState({
            cityName: city,
        });
  }


// Here is the section that handles the submission of data,
// It returns an object containing the current weather information of the city;
  handleSubmit = (event) => {
    event.preventDefault();
    const error = document.getElementById('error');

    if(this.state.cityName === ''){
      error.innerText = "city name cannot be empty";
    }else {
      error.innerText = ""
      axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q= " +
        `${this.state.cityName}` +
        "&units=metric&appid=" +
        `${this.state.apiKey}`
      ).then((info) => {
        // console.log(info);
        this.setState({
          weatherDesc: info.data.weather[0].description,
          currentCity: info.data.name,
          country: info.data.sys.country
        })
        // console.log(this.state.data.weather[0].description)
        console.log(info.data);
      })
        .catch(err => {
          error.innerText = "An error occured";
        });
    };
  };
  render() {
    return (
      <div className="search">
        <form>
          <label>
            <input type="text" name="cityName" onChange={this.handleChange} placeholder="City Name" />
            <button onClick={this.handleSubmit}>S</button>
          </label>
        </form>
        <p id='error' className="inputerror"></p>
        <Body temp={this.state.temperature} currentCity={this.state.currentCity} country={this.state.country} desc={this.state.weatherDesc}/>
      </div>
    );
  }
}

export default Form;
