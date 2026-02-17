export default function useCustomizeTour() {

  const navigate = useNavigate();

  const [comfort, setComfort] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

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

  const handleShowTour = async () => {
    try {
      // console.log("RAW minBudget:", minBudget);
      // console.log("Number(minBudget):", Number(minBudget));
      if (!region) {
        alert("Please select region");
        return;
      }
      if (!startDate) {
        alert("Please select start date");
        return;
      }
      if (!endDate) {
        alert("Please select end date");
        return;
      }

      if (minBudget < 0 || maxBudget < 0) {
        alert("Min or Max budget cannot be negative");
        return;
      }

      // alert("Navigating to SelectTour...");
      // navigate("/selectTour");

      localStorage.setItem("filters", JSON.stringify(tourFilters));

      const stored = localStorage.getItem("filters");
      const filters = stored ? JSON.parse(stored) : {};

      const payload = {
        region: filters.region,
        startDate: `${filters.startDate}T00:00:00`,
        endDate: `${filters.endDate}T00:00:00`,
      };

      addIfNotEmpty(payload, "comfort", filters.comfort);
      addIfNotEmpty(payload, "groupType", filters.groupType);
      addIfNotEmpty(payload, "minBudget", filters.minBudget);
      addIfNotEmpty(payload, "maxBudget", filters.maxBudget);
      addIfNotEmpty(payload, "tourTypes", filters.selectedVacationTypes);

      // console.log(payload)
      // localStorage.setItem("payload", JSON.stringify(payload));

      // const res=await baseApi.post("/tours/customize",payload);

      localStorage.setItem("result", JSON.stringify(payload));
      // console.log(region)
      // console.log(minBudget)
      // console.log(res.data)

      alert("Navigating to SelectTour...");
      navigate("/selectTour");
    } catch (err) {
      // console.error(err.response.data.message);
      console.error(err);
      // alert("No tours found matching the selected filters.");
    }
  };

  return {
    comfort,
    setComfort,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    minBudget,
    setMinBudget,
    maxBudget,
    setMaxBudget,
    groupType,
    setGroupType,
    region,
    setRegion,
    selectedVacationTypes,
    handleVacationSelect,
    handleResetFilters,
    handleShowTour,
  };
}
