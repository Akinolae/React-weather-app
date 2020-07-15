import React from 'react';

class Body extends React.Component {
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
}

export default Body;