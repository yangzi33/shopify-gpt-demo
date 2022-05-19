import React from "react";
import Prompt from "./Prompt";
import { Table, TableBody } from "@mui/material";

class PromptHistory extends React.Component {
  render() {
    const { prompts } = this.props;
    return (
      <Table className="prompt-list">
        <TableBody>
          {prompts.map((prompt) => {
            return <Prompt prompt={prompt} />;
          })}
        </TableBody>
      </Table>
    );
  }
}

export default PromptHistory;
