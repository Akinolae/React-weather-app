import React from "react";
import Axios from "axios";
import Loader from '../loader';
import {Div, Text, Grid, Card, Image} from "./style"
import { Link } from "react-router-dom";

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsData: [],
            isEmpty: true
        }
    }

    style = {
        padding: '20px',
        width: '50%',
        textAlign: 'center',
        textDecoration: 'none'
    
    }
    componentDidMount = () => {
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ng&' +
            'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        Axios.get(url)
        .then((data) => 
        this.setState({
            newsData: data.data.articles,
            isEmpty: true
                 })
            )
        }
        dataDisplay = () =>{
            const { newsData } = this.state;

            if(newsData.length !== 0){
                return(
                <Div style={{height: 'auto'}}>
                    <Text className="newsMakingRounds">News making rounds</Text>
                    <Grid>
                        {newsData.map((news, index) =>
                            <Card key={index}>
                             <Image src={news.urlToImage} alt="..." />
                             <Link style={this.style} to={news.url}>{news.title}</Link>
                        </Card>)}
                         </Grid>
                    </Div>)
            } else{
                return <Loader />
            }
        }
    }

export default Api;