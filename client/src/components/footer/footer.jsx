import style from "./footer.module.css";

function Footer({ countries, setPage, currentPage }) {
  const pageNumbers = [1];

  for (let i = 2; i <= Math.floor(countries / 10); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value === "prev") {
      setPage(currentPage - 1);
    }
    if (e.target.value === "next") {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className={style.main}>
      <button disabled={currentPage === 1} onClick={handleClick} value="prev">
        Prev
      </button>
      <span>{currentPage}</span>
      <button
        disabled={currentPage === pageNumbers.length}
        onClick={handleClick}
        value="next"
      >
        Next
      </button>
    </div>
  );
}

export default Footer;
