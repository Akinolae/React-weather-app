import React, { Component } from 'react';

class Body extends Component {
        state = {
            date: new Date(),
            timeOfDay : '',
        }

        componentDidMount () {
            const {date} = this.state;
            if(date.getHours() < 12){
                this.setState({
                    timeOfDay: "Good morning"
                })
            } else if (date.getHours() >= 12 && date.getHours() < 17) {
                this.setState({
                    timeOfDay: 'Good afternoon'
                })
        }
            else {
                this.setState({
                    timeOfDay: 'Good evening'
                })
            }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <p className="Time">{this.state.timeOfDay}</p>
                <div className="card" >
                    <div className="card-body">
                        <p className="description">{this.props.currentCity}, <strong>{this.props.country}</strong></p>
                        <p className="temp">{this.props.temp}<sup>&deg; C</sup></p>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;