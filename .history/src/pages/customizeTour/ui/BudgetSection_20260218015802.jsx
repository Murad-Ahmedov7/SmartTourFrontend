
  const budgetFields = [
    {
      label: "Min Budget (AZN)",
      placeholder: "e.g. 100",
      value: minBudget,
      onChange: (e) => setMinBudget(e.target.value),
    },
    {
      label: "Max Budget (AZN)",
      placeholder: "e.g. 5000",
      value: maxBudget,
      onChange: (e) => setMaxBudget(e.target.value),
    },
  ];