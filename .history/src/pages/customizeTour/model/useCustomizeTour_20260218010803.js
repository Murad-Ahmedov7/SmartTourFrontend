export default function useCustomizeTour() {
  // const min = 50;
  // const max = 1000;
  // const DEFAULT_BUDGET_VALUE = 250;
  const navigate = useNavigate();

  // const [budget, setBudget] = useState(DEFAULT_BUDGET_VALUE);
  const [comfort, setComfort] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  // const [selectedMonth, setSelectedMonth] = useState("");
  const [groupType, setGroupType] = useState("");
  const [region, setRegion] = useState("");
  // const [children, setChildren] = useState("");
  const [selectedVacationTypes, setSelectedVacationTypes] = useState([]);

  const addIfNotEmpty = (obj, key, value) => {
    if (
      (key === "minBudget" && value.trim() !== "") ||
      (key === "maxBudget" && value.trim() !== "")
    ) {
      obj[key] = Number(value.trim());
    } else if (Array.isArray(value) && value.length > 0) {
      obj[key] = value;
    } else if (typeof value === "string" && value.trim() !== "") {
      obj[key] = value.trim();
    }
  };

  
  const handleVacationSelect = (vacationName) => {
    setSelectedVacationTypes((prevSelected) => {
      if (prevSelected.includes(vacationName)) {
        return prevSelected.filter((name) => name !== vacationName);
      } else {
        return [...prevSelected, vacationName];
      }
    });
  };


    const handleResetFilters = () => {
    // setBudget(DEFAULT_BUDGET_VALUE);
    setMinBudget("");
    setMaxBudget("");
    setComfort("");
    setStartDate("");
    setEndDate("");
    // setSelectedMonth("");
    setGroupType("");
    setRegion("");
    // setAdults("");
    // setChildren("");
    setSelectedVacationTypes([]);
  };

  return {};
}
