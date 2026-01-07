function ask() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");

  if (!question) {
    answer.textContent = "Please ask something.";
    return;
  }

  if (question.includes("why")) {
    answer.textContent =
      "I chose a worker loop because it gives explicit control over concurrency and retry logic, which is easier to reason about than cron-based scheduling.";
    return;
  }

  answer.textContent =
    "This portfolio highlights backend decision-making and trade-offs. Try asking 'Why did you choose Go?'";
}
