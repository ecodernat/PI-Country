import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const FILTER_BY_CONTINENTS = "FILTER_BY_CONTINENTS";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const RESET_FILTERS = "RESET_FILTERS";

export function getCountries() {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/countries");

      return dispatch({
        type: GET_COUNTRIES,
        payload: apiData.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );

      return dispatch({
        type: GET_COUNTRIES_NAME,
        payload: apiData.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/countries/${id}`);

      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: apiData.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postActivity(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        data
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/activities");

      return dispatch({
        type: GET_ACTIVITIES,
        payload: apiData.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
}

export function filterByContinents(payload) {
  return {
    type: FILTER_BY_CONTINENTS,
    payload,
  };
}

export function filterByActivities(payload) {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload,
  };
}

export function resetFilters(payload) {
  return {
    type: RESET_FILTERS,
    payload,
  };
}
