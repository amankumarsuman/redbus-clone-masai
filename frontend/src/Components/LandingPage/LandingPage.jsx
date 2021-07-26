import React from "react";
import Services from "./Benefits/Services";
import BusTracker from "./BusTracker/BusTracker";
import Coupon from "./CouponSection/Coupon";
import Safety from "./SafetySection/Safety";
import styles from "./LandingPage.module.css";
import { useHistory } from "react-router-dom";
import Awards from "./Awards and Recognition/Awards";
import GlobalPresence from "./Global Presence/GlobalPresence";

const LandingPage = () => {
  const history = useHistory();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const [displayDepartureDropdown, setDisplayDepartureDropdown] =
    React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] =
    React.useState(false);

  return (
    <div>
      <div className={styles.LandingPage__mainBanner}>
        <div className={styles.LandingPage__form}>
          <div className={styles.LandingPage__form__departure}>
            <div className={styles.LandingPage__form__departure__input}>
              <input
                type="text"
                placeholder="Source"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
            {displayDepartureDropdown ? (
              <div className={styles.LandingPage__form__departure__dropdown}>
                <ul>
                  {filteredSources.map((source) => (
                    <li
                      onClick={() => {
                        setDeparture(source);
                        setDisplayDepartureDropdown(false);
                      }}
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__arrival}>
            <div className={styles.LandingPage__form__arrival__input}>
              <input
                type="text"
                placeholder="Destination"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
            </div>
            {displayArrivalDropdown ? (
              <div className={styles.LandingPage__form__arrival__dropdown}>
                <ul>
                  {filteredDestinations.map((destination) => (
                    <li
                      onClick={() => {
                        setArrival(destination);
                        setDisplayArrivalDropdown(false);
                      }}
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__date}>
            <input
              type="date"
              placeholder="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.LandingPage__form__button}>
            <button
              onClick={() => {
                history.push(
                  `/select-bus?departure=${departure}&arrival=${arrival}&date=${date}`
                );
              }}
            >
              Search Bus
            </button>
          </div>
        </div>
      </div>
      <Coupon />
      <Safety />
      <BusTracker />
      <Services />
      <Awards />
      {/* <Awards /> */}
      <GlobalPresence />
    </div>
  );
};

export default LandingPage;
