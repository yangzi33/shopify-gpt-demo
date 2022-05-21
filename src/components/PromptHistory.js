import React from "react";
import Prompt from "./Prompt";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { uid } from "react-uid";

const columns = [
  { id: "input", label: "Input", minWidth: 170 },
  { id: "result", label: "GPT-3\u00a0Result", minWidth: 100 },
];

class PromptHistory extends React.Component {
  render() {
    const { prompts } = this.props;
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table className="prompt-list" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {prompts.map((prompt) => {
                return <Prompt prompt={prompt} key={uid(prompt)}/>;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

export default PromptHistory;
