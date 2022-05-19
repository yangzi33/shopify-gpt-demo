const log = console.log;

export const processPrompt = (main) => {
  log("Processing prompt");
  const promptList = main.state.prompts;

  const newPrompt = {
    prompt: main.state.promptInput,
    result: main.state.result,
  };

  promptList.push(newPrompt);

  main.setState({
    prompts: promptList,
  });
};
