import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import audioBlue from "../../images/audioBlue.jpg";
import audioRed from "../../images/audioRed.png";
import AudioPlay from "./AudioPlay";

interface Props {
    links: Array<string>;
}

class SearchedWordAudio extends Component<Props> {
    

    render() {
        return (
            <Grid container>
                <div style={{paddingRight: "10px"}}>
                    <AudioPlay link={this.props.links[0]} image={audioBlue}/>
                </div>
                <div>
                    <AudioPlay link={this.props.links[1]} image={audioRed}/>
                </div>
            </Grid>
        );
    }
}

export default SearchedWordAudio;
