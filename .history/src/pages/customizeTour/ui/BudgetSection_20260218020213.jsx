
 
export const BudgetSection=({minBudget, maxBudget, setMinBudget, setMaxBudget})=>{
    return (
        <div className="budget-section">
        <h1>Budget</h1>
        <p className="price-info">Choose your price range</p>

        <div className="budget-inputs">
            {budgetFields.map((item, index) => (
            <div key={index} className="budget-field">
                <label>{item.label}</label>
                <input
                type="number"
                min={0}
                value={item.value}
                onChange={item.onChange}
                className="budget-input"
                placeholder={item.placeholder}
                style={{ marginTop: "14px" }}
                />
            </div>
            ))}
        </div>
        </div>
    );
    };