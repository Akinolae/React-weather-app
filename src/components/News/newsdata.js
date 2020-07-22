import React from "react";
import Axios from "axios";

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsData: []
        }
    }

    style = {
        width: '20rem'
    }
    componentDidMount = () => {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=ng&' +
            'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        Axios.get(url)
        .then((data) => 
        this.setState({
            newsData: data.data.articles
        })
            )
        }
        dataDisplay = () =>{
            const { newsData } = this.state;
            if(newsData.length !== 0){
                return(
                <div>
                    <h6 className="newsMakingRounds">News making rounds</h6>
                <div className = "row container">
                 {newsData.map((news, index) =>
                     <div key={index}>
                        <div className="col-sm">
                            <div className="card" style={this.style}>
                                 <img src={news.urlToImage} className="card-img-top" alt="..." />
                                 <div className="card-body">
                                 <p>{news.title}</p>
                                <a className="links"  href={news.url}>{news.url}</a>
                            </div>
                         </div>
                        </div>
                     </div>)}
                     </div>
                     </div>)
            } else{
                return <div className="container">
                           <div className="loader_back">
                               <div className="loader blue"></div>
                           </div>
                       </div>
            }
        }
    }

export default Api;