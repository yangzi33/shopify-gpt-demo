import React from "react";
import { TableRow, TableCell } from "@mui/material";

class Prompt extends React.Component {
  render() {
    const { prompt } = this.props;
    return (
      <TableRow className="prompt" key={prompt.promptInput}>
        <TableCell component="th" scope="row">
          {prompt.promptInput}
        </TableCell>

        <TableCell component="th" scope="row">
          {prompt.result}
        </TableCell>
      </TableRow>
    );
  }
}

export default Prompt;
