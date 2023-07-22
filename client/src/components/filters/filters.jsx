import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  orderByName,
  orderByPopulation,
  filterByContinents,
  getActivities,
  filterByActivities,
} from "../../redux/actions";

import style from "./filters.module.css";

function Filters({ setPage }) {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
  };

  const handleFilterContinent = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(filterByContinents(e.target.value));
  };

  const handleFilterActivities = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(filterByActivities(e.target.value));
  };
  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div className={style.main}>
      <select
        className={style.select}
        defaultValue={"Alphabetical order"}
        onChange={handleOrderName}
      >
        <option disabled>Alphabetical order</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select
        className={style.select}
        defaultValue={"Filter by population"}
        onChange={handleOrderPopulation}
      >
        <option disabled>Filter by population</option>
        <option value="min">Min</option>
        <option value="max">Max</option>
      </select>
      <select
        className={style.select}
        defaultValue={"Filter by continent"}
        onChange={handleFilterContinent}
      >
        <option disabled>Filter by continent</option>
        <option value="All">All</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select
        className={style.select}
        defaultValue={"Activities"}
        onChange={handleFilterActivities}
      >
        <option disabled>Activities</option>
        <option value="All">All</option>
        {activities.map((a) => (
          <option value={a.name}>{a.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
