import React from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderOne}>
      
        <p>
          Home &gt; Bus Tickets &gt; {departure} Bus &gt; {departure} To{" "}
          {arrival} Bus
        </p>
        <p style={{ fontWeight: "bold" }}>Fare Starts from INR 100</p>
      </div>


      <div className={styles.HeaderTwo}>
        <h3>
          {departure} to {arrival} &lt; {date} &gt;
        </h3>
      </div>
      <div className={styles.topImages}>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/SafetyPlus_MainCard.svg" alt="safety+"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.svg" alt="flexi-ticket"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_20_MainCard.svg" alt="top-raeted-buses"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/3_10_MainCard.svg" alt="early-bus"/>
                     </div>
    </div>
  );
};

export default Header;
