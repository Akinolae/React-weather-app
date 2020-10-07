import React, {useState} from 'react';
import {Paper, Box} from "@material-ui/core";

const BodyPane = (props) => {
    const [state, setState] = useState({
        timeOfDay: ''
    })

     const componentDidMount = () => {
            console.log(props);
            const date = new Date();

            if(date.getHours() < 12){
                setState({
                    timeOfDay: "Hello, Good morning"
                })
            } 
            else if (date.getHours() >= 12 && date.getHours() < 17) {
                setState({
                    timeOfDay: 'Hello, Good afternoon'
                })
        }
            else {
                setState({
                    timeOfDay: 'Hello, Good evening'
                })
            }
    }
    componentDidMount();

        return (
            <Box>
                  <div id="body">
                <p className="Time">{state.timeOfDay}</p>
                <div className="card bodycard" >
                    <div className="card-body">
                        <p className="description">{props.currentCity}, <strong>{props.country}</strong></p>
                        <p className="temp">{props.temp}<sup>&deg; C</sup></p>
                        <p className="weather_desc">{props.desc}</p>
                    </div>
                </div>
            </div>
            </Box>
        )
}

export default BodyPane;