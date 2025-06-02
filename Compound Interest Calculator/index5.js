function calculate() {
  const totalAmount = document.getElementById("total-amount");
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value) / 100;
  const years = Number(document.getElementById("years").value);

  if (principal <= 0 || rate < 0 || years <= 0) {
    totalAmount.textContent = "Result: Please enter valid inputs.";
    return;
  }

  const result = principal * Math.pow(1 + rate, years);

  totalAmount.textContent = "Result: " + result.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
}

function calculateEMI() {
  const emiResult = document.getElementById("emi-result");
  const principal = Number(document.getElementById("principal").value);
  const annualRate = Number(document.getElementById("rate").value);
  const years = Number(document.getElementById("years").value);

  const months = years * 12;
  const monthlyRate = annualRate / (12 * 100);

  if (principal <= 0 || annualRate < 0 || years <= 0) {
    emiResult.textContent = "EMI: Please enter valid inputs.";
    return;
  }

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

  emiResult.textContent = "EMI: " + emi.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  }) + " per month";
}
