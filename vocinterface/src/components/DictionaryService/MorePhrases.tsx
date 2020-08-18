import React, {Component} from 'react';
import audioBrow from "../../images/audioBrown.png";

interface Props {
    phrases: Array<object>
}

class MorePhrases extends Component<Props> {

    onClickPlay = (link: string) => {
        let audio = new Audio(link);
        audio.play();
    };

    renderListPhrases(phrases: Array<object>): JSX.Element[]
    {
        return phrases.map((phrase: any, index: number) => {
            return (
                <div key={index}>
                    <li style={{ paddingBottom: "0px", listStyleType: "None", cursor: "pointer", color: "black"}} onClick={()=> this.onClickPlay(phrase.audio)}>
                        <img src={audioBrow} alt="audioBrown" style={{width: "20px", height: "20px"}} /> {phrase.text}
                    </li>
                </div>
            );
        });
    }
    renderMorePhrases(phrases: Array<object>): JSX.Element[]
    {
        return  phrases.map((phrase: any, index: number) => {
            return (
              <p style={{ color: "green" }}>
                  {phrase.singPost}
                  <p style={{color: "blue"}}> <span style={{height: "10px"}}> - </span>{phrase.def}</p>
                  {this.renderListPhrases(phrase.phrases)}
              </p>
            );
        });
    }

    render() {
        return (
            <>
                <h1>Additional Info: </h1>
                {this.renderMorePhrases(this.props.phrases)}
            </>
        );
    }
}

export default MorePhrases;
