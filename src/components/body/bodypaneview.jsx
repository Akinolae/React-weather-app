import React from 'react';
import Body from './bodyPane';

class BodyPane extends Body {
    render() {
        return (
            <div id="body">
                <p className="Time">{this.state.timeOfDay}</p>
                <div className="card bodycard" >
                    <div className="card-body">
                        <p className="description">{this.props.currentCity}, <strong>{this.props.country}</strong></p>
                        <p className="temp">{this.props.temp}<sup>&deg; C</sup></p>
                        <p className="weather_desc">{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyPane;