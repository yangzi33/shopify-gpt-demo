import React from "react";
import { TableRow, TableCell } from "@mui/material";
import "./../styles/Prompt.css";

class Prompt extends React.Component {
  render() {
    const { prompt } = this.props;
    return (
      <TableRow className="promptTable" key={prompt.promptInput}>
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
