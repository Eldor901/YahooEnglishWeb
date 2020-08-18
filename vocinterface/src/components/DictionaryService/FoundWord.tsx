import React, { Component } from "react";
import { Word } from "../../actions";
import SearchedWordAudio from "./SearchedWordAudio";
import DefinitionWord from "./DefinitionWord";
import Button from "@material-ui/core/Button";
import MorePhrases from "./MorePhrases";
import {Spring} from 'react-spring/renderprops'


interface Props {
  Word: Word | string | any;
}

interface State {
  LoadContent: boolean;
}


class FoundWord extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {LoadContent: false};
  }

  onClickWatchMorePhrases= () => {
    this.setState({
      LoadContent: true,
    })
  };

  render() {
    const word = this.props.Word[0].word;
    const links: Array<string> = this.props.Word[0].wordPage.links;
    const definitions: Array<object>  = this.props.Word[0].wordPage.definitions;
    const morePhrases: Array<object> = this.props.Word[0].wordPage.morePhrases;


    return (
      <>
          {word ? <h2> Searched Word: "{word}" </h2>: <h2> not found </h2>}
        <SearchedWordAudio links={links}/>
        <DefinitionWord definitions={definitions}/>

        {this.state.LoadContent  ? <Spring from = {{opacity: 0}} to={{opacity: 1}}>{
          props => (
            <div style={props}>
             <MorePhrases phrases={morePhrases}/>
            </div>
          )}</Spring>: <Button
            variant="contained"
            style={{
              float: "right",
              backgroundColor: "#00b2bf",
              marginRight: "40px",
              marginBottom: "20px",
              color: "white",
              transition: "width 1s 1s, height 0.5s 0.5s, opacity 0.5s",

            }}
            onClick={this.onClickWatchMorePhrases}
        >
          Watch More Phrases
        </Button>}
      </>
    );
  }
}

export default FoundWord;
