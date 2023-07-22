import Card from "../card/card";

import style from "./cards.module.css";

function Cards({ countries }) {
  return (
    <div className={style.main}>
      {countries &&
        countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            image={country.image}
            continent={country.continent}
            population={country.population}
          />
        ))}
    </div>
  );
}

export default Cards;
