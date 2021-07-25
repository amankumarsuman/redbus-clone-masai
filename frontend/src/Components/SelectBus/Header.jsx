import React, { useState } from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");
  const [modify, setModify] = useState(false);
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderOne}>
        <p>
          Home &gt; Bus Tickets &gt; {departure} Bus &gt; {departure} To{" "}
          {arrival} Bus
        </p>
        <p style={{ fontWeight: "bold" }}>Fare Starts from INR 100</p>
      </div>

      {!modify ? (
        <div className={styles.modify}>
          <h3>{departure} </h3>
          <h3> &#8594;</h3>
          <h3>{arrival}</h3>
          <h3>&#60;</h3>
          <h3> {date}</h3>
          <h3>&#62;</h3>
          <button onClick={() => setModify(!modify)}>Modify</button>
        </div>
      ) : (
        <div className={styles.search}>
          <div>
            <p>FROM</p>
            <input />
          </div>
          <div>
            <p>TO</p>
            <input />
          </div>
          <div>
            <p>DATE</p>
            <input type="date" />
          </div>
          <div>
            <button onClick={() => setModify(!modify)}>Search</button>
          </div>
        </div>
      )}

      <div className={styles.topImages}>
        <img
          src="https://s3.rdbuz.com/Images/ReddealsCards/IND/SafetyPlus_MainCard.svg"
          alt="safety+"
        />
        <img
          src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.svg"
          alt="flexi-ticket"
        />
        <img
          src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_20_MainCard.svg"
          alt="top-raeted-buses"
        />
        <img
          src="https://s3.rdbuz.com/Images/ReddealsCards/IND/3_10_MainCard.svg"
          alt="early-bus"
        />
      </div>
    </div>
  );
};

export default Header;
