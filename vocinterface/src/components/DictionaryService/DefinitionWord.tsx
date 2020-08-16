import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import audioBrow from "../../images/audioBrown.png"
interface Props {
  definitions: Array<object>;
}

class DefinitionWord extends Component<Props> {
    onClickPlay = (link: string) => {
        let audio = new Audio(link);
        audio.play();
    };


  renderListPhrases(phrases: Array<object>): JSX.Element[]
  {
      return phrases.map((phrase: any, index: number) => {
          return (
              <div key={index}>
                  <li style={{ paddingBottom: "0px", listStyleType: "None", cursor: "pointer"}} onClick={()=> this.onClickPlay(phrase.audios)}>
                      <img src={audioBrow} alt="audioBrown" style={{width: "20px", height: "20px"}} /> {phrase.examples}
                  </li>
              </div>
          );
      });
  }

  renderListDefinition(definitions: Array<object>): JSX.Element[] {
    return definitions.map((def: any, index: number) => {
      return (
        <div key={index}>
            <p style={{ color: "green" }}>
              {def.signPost} <span style={{ color: "red" }}>{def.gram}</span>{" "}
                <p style={{color: "blue"}}> <span style={{height: "10px"}}> - </span>{def.def}</p>
            </p>
            {def.phrases.length > 0  ? <p style={{color: "brown"}}>Prases: </p> : null }
            {this.renderListPhrases(def.phrases)}
        </div>
      );
    });
  }

  render() {
    return <>{this.renderListDefinition(this.props.definitions)}</>;
  }
}

export default DefinitionWord;
