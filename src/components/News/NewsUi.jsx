import React from 'react';
import Api from './newsdata';

class NewsUi extends Api{
    render() {
        return (
            <div>
                {this.dataDisplay()}
            </div>
        )
    }
}

export default NewsUi;