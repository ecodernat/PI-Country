import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries } from "../../redux/actions";

import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";

import Filters from "../../components/filters/filters";

import style from "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);

  const lastCountry = currentPage * 10;
  const firstCountry = lastCountry - 10;
  const currentCountries = allCountries.slice(firstCountry, lastCountry);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={style.main}>
      <div>
        <NavBar setCurrentPage={setCurrentPage} />
      </div>
      <div>
        <Filters setPage={setCurrentPage} />
      </div>
      <div>
        <ul>
          <Cards countries={currentCountries} />
        </ul>
      </div>
      <div>
        <Footer
          countries={allCountries.length}
          setPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Home;
