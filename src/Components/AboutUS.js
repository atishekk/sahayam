import React from "react";
import Carousel from "react-material-ui-carousel";
import {Paper} from "@material-ui/core";
import one from "../../src/assets/1.png"
import two from "../../src/assets/2.png"

const imageSource = [one, two]

const AboutUS = () => {
    return (
        <Carousel>
            {
                imageSource.map( x => <Image source={x} key={imageSource.indexOf(x)}/> )
            }
        </Carousel>
    )
}

const Image = (props) => {
    return (
        <Paper variant="outlined" elevation={5}>
            <img src={props.source}/>
        </Paper>
    )
}

export default AboutUS