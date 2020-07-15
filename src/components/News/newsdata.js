import React from "react";
import axios from "axios";

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsData: []
        }
    }
    componentDidMount = () => {
        const apiKey = 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const url = `https://newsapi.org/v2/top-headlines? + country=us& + ${apiKey}`;
        axios.get(url).then(
            newsData => {
                this.setState({
                    newsData: newsData.data.articles
                })
                console.log(this.state.newsData);
            }
        )
    }
    }

export default Api;
 