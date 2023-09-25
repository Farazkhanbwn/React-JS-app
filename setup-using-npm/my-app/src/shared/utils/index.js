export const getNumberThroughPrompt = (message) => {
  const promptDefaultMessage = "Enter The Number of prime to generate";
  let promptMessage = message || promptDefaultMessage;
  let choice = parseInt(window.prompt(promptMessage));
  return choice;
};
