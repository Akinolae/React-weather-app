import React from 'react';
import Body from './bodyPane';

class BodyPane extends Body {
    render() {
        const { currentCity, country, temp, desc } = this.props;
        const timeOfDay = this.state.timeOfDay;
        return (
            <div id="body">
                <p className="Time">{timeOfDay}</p>
                <div className="card bodycard" >
                    <div className="card-body">
                        <p className="description">{currentCity}, <strong>{country}</strong></p>
                        <p className="temp">{temp}<sup>&deg; C</sup></p>
                        <p className="weather_desc">{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyPane;