function ask() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");

  if (!question) {
    answer.textContent = "Please ask something.";
    return;
  }

  answer.textContent = `
    This portfolio focuses on backend reasoning.
    The Job Scheduler project demonstrates:
    - concurrency handling
    - retry logic
    - system thinking

    (Real AI powered by Google Gemini will be added.)
    `;
}
