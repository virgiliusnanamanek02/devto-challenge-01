function ask() {
  const q = document.getElementById("question").value;
  const answer = document.getElementById("answer");

  if (!q) {
    answer.textContent = "Please ask something.";
    return;
  }

  const prompt = buildPrompt(q);

  answer.textContent =
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
