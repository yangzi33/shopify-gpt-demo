const log = console.log;

const OPENAI_SECRET = "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";

export const processPrompt = (main) => {
  log("Processing prompt");
  const promptList = main.state.prompts;

  //   const newPrompt = {
  const newPromptInput = main.state.promptInput;
  // result: "Result of " + main.state.promptInput,

  if (newPromptInput <= 0) {
    alert("GPT-3 says they don't wanna answer empty prompts.");
  } else {
    getResult(newPromptInput).then(
        (result) => {
            const newPrompt = {
                promptInput: newPromptInput,
                result: result,
            };
            promptList.push(newPrompt);
            main.setState({
                prompts: promptList,
            });
        }
    )
  }
};

const getResult = (prompt) => {
    const data = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    const result = fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_SECRET}`,
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {return data.choices[0].text});

    return result;
};
