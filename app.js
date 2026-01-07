document.addEventListener("DOMContentLoaded", () => {
  const askBtn = document.getElementById("askBtn");
  const questionInput = document.getElementById("question");
  const answerOutput = document.getElementById("answer");

  askBtn.addEventListener("click", () => {
    handleAsk(questionInput.value, answerOutput);
  });
});

function handleAsk(question, answerOutput) {
  if (!question) {
    answerOutput.textContent = "Please ask something.";
    return;
  }

  const prompt = buildPrompt(question);

  // Simulated AI response
  answerOutput.textContent =
    "Using a worker loop gives explicit control over concurrency and retries. This makes the system easier to reason about and debug compared to cron-based scheduling.";

  console.log("PROMPT SENT TO AI:", prompt);
}

function buildPrompt(userQuestion) {
  return `
You are an AI assistant for a backend developer portfolio.

Portfolio context:
- Owner: Vicky Nana
- Role: Backend Developer (Go / Java)
- Project: Job Scheduler
- Problem: Reliable background job execution
- Decision: Worker loop using Go channels
- Trade-offs: Simpler logic but not distributed

User question:
"${userQuestion}"

Answer clearly and concisely. Focus on reasoning, not code.
`;
}
