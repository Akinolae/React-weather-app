
import React from 'react';
import {Div, Box,Country} from "./style"

const BodyPane = (props) => {
        return (
            <Box>
                <Div>
                        <Country >{props.currentCity}, <strong>{props.country}</strong></Country>
                        <p >{props.temp}<sup>&deg; C</sup></p>
                        <p >{props.desc}</p>
                </Div>
            </Box>
        )
}

export default BodyPane;