import React from "react";
import Carousel from "react-material-ui-carousel";
import {Grid, Paper, Typography} from "@material-ui/core";
import one from "../../src/assets/1.png"
import two from "../../src/assets/2.png"
import three from "../../src/assets/3.jpg"

const imageSource = [one, two,]

const AboutUS = () => {
    return (
        <React.Fragment>
            <Carousel>
                {
                    imageSource.map( x => <Image source={x} key={imageSource.indexOf(x)}/> )
                }
            </Carousel>
            <Grid container direction="column" justify="center">
                <Typography align="center" variant="h2">
                    A Way To Come Together For Community Help
                </Typography>
                <Typography align="left" variant="h4" style={{paddingLeft: "50px", paddingTop:"50px", paddingBottom: "20px" }}>
                    Community Service Helps Connect to the Community
                </Typography>
                <Typography align="center" variant="p" style={{paddingLeft: "50px", paddingRight: "50%", fontSize: "20px"}}>
                    Giving back and assisting others is the basis of community service or volunteering. Thus, it teaches us how significant it is to help the ones in need, the ones who are less fortunate than us. The importance of community service lies in the fact that it connects us to the community by improving it, and making it a better place for all of us to live in.
                </Typography>

                <Typography align="right" variant="h4" style={{paddingRight: "130px", paddingTop:"50px", paddingBottom: "20px"}}>
                    Community Service Raises Social Awareness
                </Typography>
                <Typography align="center" variant="p" style={{paddingRight: "50px", paddingLeft: "50%", fontSize: "20px"}}>
                    How does volunteering benefit the community? Volunteering or community service provides you with a perfect opportunity to become closer to the community you live in. Community service broadens your horizons by helping you understand the needs of the society and the population you are trying to help through the project you are volunteering on. Reading or hearing about issues is not quite the same as getting personally involved. It brings you closer to families and individuals in need, gives you firsthand experience and understanding of the conditions they are in.
                </Typography>

                <Typography align="left" variant="h4" style={{paddingLeft: "50px", paddingTop:"50px", paddingBottom: "20px" }}>
                    Community Service Establishes Contacts and Friendships
                </Typography>
                <Typography align="center" variant="p" style={{paddingLeft: "50px", paddingRight: "50%", fontSize: "20px", paddingBottom: "100px"}}>
                    The easiest way to make friends is through activities you perform together. Not only would you be helping the ones in need, but you would also be able to meet some other volunteers. This benefit of community service is especially important if you are new in an area. After all, is there a better way to meet your neighbors and show them how eager you are to improve your community? In addition, you could invite your existing friends to do community service with you and through it, further strengthen your relationship and have fun at the same time.
                </Typography>
                <Paper align="center" elevation={10} >
                    <img src={three} style={{paddingTop: "100px"}}/>
                    <Typography variant="h2" align="center" style={{paddingBottom: "100px"}}>
                        Come Be a Part of Our Family
                    </Typography>
                </Paper>
            </Grid>
        </React.Fragment>
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