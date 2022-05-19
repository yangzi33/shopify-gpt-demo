import React from "react";
import PromptHistory from "./PromptHistory";
import { processPrompt } from "../actions/prompt";
import { TextField, Button, Grid } from "@mui/material";
import "./../styles/GPTMain.css";

class GPTMain extends React.Component {
  //   constructor(props) {
  //     // When the componenet is created
  //     super(props);
  //   }
  state = {
    promptInput: "",
    prompts: [
      { promptInput: "dummy prompt 1", result: "dummy result 1" },
      { promptInput: "dummy prompt 2", result: "dummy result 2" },
    ],
  };

  //   handleChange = (e) => {
  //     const value = e.target.value;
  //     const name = e.target.name;

  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  render() {
    const { prompt } = this.props;

    return (
      <div>
        <div id="inputWrap">
          <TextField
            id="propmt-input"
            label="Outlined"
            variant="outlined"
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            value={prompt}
            onChange={this.handleChange}
            multiline
            sx={{ width: "100%" }}
            rows={10}
            // maxRows={10}
          />
        </div>
        <div id="generateButtonWrap">
          <Button id="generateButton" onClick={() => processPrompt(this)}>
            Generate
          </Button>
        </div>
        <div id="resultWrap">
          <PromptHistory prompts={this.state.prompts} />
        </div>
      </div>
    );
  }
}

export default GPTMain;
