import React from 'react';
import Api from './newsdata';

class NewsUi extends Api{
    render() {
        return (
            <div>
                <h1>{this.state.newsData.map(news => <p key={news.title}>{news.source}</p>)}</h1>
            </div>
        )
    }
}

export default NewsUi;