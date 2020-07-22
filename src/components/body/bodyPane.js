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
                    timeOfDay: "Hello, Good morning"
                })
            } else if (date.getHours() >= 12 && date.getHours() < 17) {
                this.setState({
                    timeOfDay: 'Hello, Good afternoon'
                })
        }
            else {
                this.setState({
                    timeOfDay: 'Hello, Good evening'
                })
            }
    }
}

export default Body;