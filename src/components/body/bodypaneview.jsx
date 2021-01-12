
import React from 'react';
import {Div, Box,Country, P, H6, Disp} from "./style"

const BodyPane = (props) => {
        return (
            <Box>
                <Div>
                    <Disp>
                        <Country >{props.desc}</Country>
                    </Disp>
                        <P >{props.temp}<sup>&deg; C</sup></P>
                        <H6>{props.currentCity}</H6>
                </Div>
            </Box>
        )
}

export default BodyPane;