import React, { Component } from "react";
import axios from "axios";
import Body from "./bodyPane";

class Form extends Component {
  state = {
    temperature: "",
    cityName: "",
    apiKey: "7733cf409739e72dc2741f7677dcb531",
    error: '',
    currentCity: '',
    country: '',
    weatherDesc: ''
  };

  handleChange = (event) => {
      const city = event.target.value;
        this.setState({
            cityName: city,
        })
  }

//   Here is the section that handles the submission of data,
// It returns an object containing the current weather information of the city;
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.cityName);
    if(this.state.cityName === "" ){
        this.setState({

            currentCity: "",
            temperature: " ",
            country: ""
        })
    }
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q= " +
          `${this.state.cityName}` +
          "&units=metric&appid=" +
          `${this.state.apiKey}`
      )
      .then((info) => {
        this.setState({
          data: info.data,
          temperature: info.data.main.temp,
          currentCity: info.data.name,
          country: info.data.sys.country,
          weatherDesc: this.state.data.weather[0].description
        })
        console.log(this.state.data.weather[0].description);
      })
      .catch(err => {
          this.setState({
              error: "an error occured"
          })
      });
  };

  render() {
    return (
      <div className="search">
        <form>
          <label>
            <input type="text" name="cityName" onChange={this.handleChange} placeholder="City Name" />
            <button onClick={this.handleSubmit}>s</button>
          </label>
        </form>
      <div className="alert alert-danger alert-dismissable fade show" role="alert">
        <p>{this.state.error}</p>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <Body temp={this.state.temperature} currentCity={this.state.currentCity} country={this.state.country} desc={this.state.weatherDesc}/>
      </div>
    );
  }
}

export default Form;
