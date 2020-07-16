import React from 'react';
import form from './form';

class FormUI extends form {
    render() {
        return (
            <div className="search">
                <form>
                    <label>
                        <input type="text" name="cityName" onChange={this.handleChange} placeholder="City Name" />
                        <button onClick={this.handleSubmit}>S</button>
                    </label>
                </form>
                <p id='error' className="inputerror"></p>
                <p id="nothingToDisplay" style={this.style}> </p>
                {this.dataChange()}
            </div>
        );
    }
}

export default FormUI;