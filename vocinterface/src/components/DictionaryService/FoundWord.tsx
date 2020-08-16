import React, { Component } from "react";
import { Word } from "../../actions";
import SearchedWordAudio from "./SearchedWordAudio";
import DefinitionWord from "./DefinitionWord";


interface Props {
  Word: Word | string | any;
}


class FoundWord extends Component<Props> {

  render() {
    const word = this.props.Word[0].word;
    const links: Array<string> = this.props.Word[0].wordPage.links;
    const definitions: Array<object>  = this.props.Word[0].wordPage.definitions;


    return (
      <>
        <h2> Searched Word: "{word}" </h2>
        <SearchedWordAudio links={links}/>
        <DefinitionWord definitions={definitions}/>
      </>
    );
  }
}

export default FoundWord;
