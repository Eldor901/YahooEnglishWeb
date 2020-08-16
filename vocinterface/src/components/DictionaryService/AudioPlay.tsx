import React, {Component} from 'react';
import audioBlue from "../../images/audioBlue.jpg";
import Grid from "@material-ui/core/Grid";

interface Props {
    link: string,
    image: string,
}

class AudioPlay extends Component<Props> {
    onClickPlay = (link: string) => {
        let audio = new Audio(link);
        audio.play();
    };


    render() {
        return (
                <div onClick={() => this.onClickPlay(this.props.link)}>
                    <img
                        src={this.props.image}
                        alt={this.props.image}
                        style={{ width: "30px", height: "30px" }}
                    />
                </div>
        );
    }
}

export default AudioPlay;
