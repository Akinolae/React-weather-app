import React from 'react';

class Loader extends React.Component {
    render(){
        return (
            <div>
                <Loader type="Bars" color="#00BFFF" height={100} width={100} timeout={3000} />
            </div>
        )
    }

}

export default Loader;