
import  { useEffect, useState } from "react";
import baseApi from "../../../api/baseApi";

export default function useToursModel() {
  const [page, setPage] = useState(1);

  const [tours, setTours] = useState([]);
  const [total, setTotal] = useState(0);

  const [sortBy, setSortBy] = useState("price_asc");

  const limit = 10;

  const fetchTours = async () => {
    const stored = JSON.parse(localStorage.getItem("filters")) || {};

    const payload = {
      ...stored,
      page,
      limit,
      sortBy,
    };

    console.log(payload);

    const res = await baseApi.post("/tours/customize", payload);

    console.log(res.data);
    setTours(res.data.tours);
    setTotal(res.data.total);
  };

  useEffect(() => {
    fetchTours();
  }, [page, sortBy]);

  return {
    tours,
    total,
    page,
    setPage,
    sortBy,
    setSortBy,
    limit,
  };
}
