import { Link } from "react-router-dom";

import style from "./landing.module.css";

function Landing() {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <h2>Welcome to my project - Henry</h2>
      </div>
      <Link className={style.btn} to="/home">
        <button>Start</button>
      </Link>
      <div className={style.footer}>
        <p>Made by Alan Ruiz 🌎</p>
      </div>
    </div>
  );
}

export default Landing;
