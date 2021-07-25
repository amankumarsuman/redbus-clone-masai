import React from "react";
import styles from "./BusBox.module.css";
import StarsIcon from "@material-ui/icons/Stars";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import PowerIcon from "@material-ui/icons/Power";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Tooltip from "@material-ui/core/Tooltip";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import { BottomTabs } from "../BottomTabs/BottomTabs";

const BusBox = ({
  _id,
  rating,
  operatorName = "New One",
  busType,
  fare,
  departureTime,
  liveTracking,
  filledSeats,
  routeDetails,
}) => {
  // capturing duration in redux store
  var avgRating = (rating.reduce((a, b) => a + b) / rating.length).toFixed(2);
  var totalReviews = rating.length;
  var seatPrice = fare * Number(routeDetails.route.distance);
  var busDepartureTime = departureTime;
  var busArrivalTime = (
    Number(departureTime) +
    Math.ceil(Number(routeDetails.route["duration"])) / 60
  ).toFixed(0);

  console.log(
    routeDetails,
    avgRating,
    totalReviews,
    seatPrice,
    busDepartureTime,
    busArrivalTime
  );
  return (
    <div className={styles.busBox}>
      <div className={styles.busBoxSection1}>
        <div className={styles.busBoxSection11}>
          <div>{operatorName}</div>
          <div>{busType}</div>
        </div>
        <div className={styles.busBoxSection12}>
          <div>{busDepartureTime}:00</div>
          <div>{routeDetails.route["departureLocation"]["name"]}</div>
        </div>
        <div className={styles.busBoxSection13}>
          <div>
            {Number(routeDetails.route["duration"] / 60).toFixed(0)}&nbsp;h
          </div>
        </div>
        <div className={styles.busBoxSection14}>
          <div>{busArrivalTime}:00</div>
          <div>{routeDetails.route["arrivalLocation"]["name"]}</div>
        </div>
        <div className={styles.busBoxSection15}>
          <div>
            <StarsIcon />
            <div>{avgRating}</div>
          </div>
          <div>
            <PeopleIcon />
            <div>{totalReviews}</div>
          </div>
        </div>
        <div className={styles.busBoxSection16}>
          <div>
            <div>INR</div>
            <div>{seatPrice}</div>
          </div>
          <div>
            <LocalOfferIcon />
            <div>redDeal applied</div>
          </div>
        </div>
        <div className={styles.busBoxSection17}>
          <div></div>
          <div>
            <div>{40 - filledSeats.length}</div>
            <div>Seats Available</div>
          </div>
          <div>
            <div>20</div>
            <div>Window</div>
          </div>
        </div>
      </div>
      <div className={styles.busBoxSection2}>
        <div className={styles.busBoxSection21}>
          <Tooltip title="Charging Point" arrow>
            <PowerIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Movie" arrow>
            <MovieFilterIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Reading Light" arrow>
            <WbIncandescentIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
          <Tooltip title="Track My Bus" arrow>
            <DirectionsBusIcon
              style={{
                fontWeight: "50",
                fontSize: "20px",
                marginRight: "9px",
                color: "grey",
              }}
            />
          </Tooltip>
        </div>
        <div className={styles.busBoxSection22}>
          {liveTracking === 1 && (
            <div>
              <GpsFixedIcon
                style={{
                  fontWeight: "50",
                  fontSize: "20px",
                  marginRight: "6px",
                }}
              />
              <span>Live Tracking</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.busBoxSection3}>
        <BottomTabs
          filledSeats={filledSeats}
          seatPrice={seatPrice}
          routeDetails={routeDetails}
          busId={_id}
          busArrivalTime={busArrivalTime}
          busDepartureTime={busDepartureTime}
          operatorName={operatorName}
        />
      </div>
    </div>
  );
};

export { BusBox };
