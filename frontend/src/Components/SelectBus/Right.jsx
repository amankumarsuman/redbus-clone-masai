import React from "react";
import styles from "./Right.module.css";
import { BusBox } from "../BusDetails/BusBox/BusBox";
import { SortingBar } from "../BusDetails/SortingBar/SortingBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";

const Right = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");

  const isLoading = useSelector((state) => state.routesReducer.isLoading);
  const isError = useSelector((state) => state.routesReducer.isError);
  const routeDetails = useSelector((state) => state.routesReducer.routes);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getRoutes(departure, arrival, date));
  }, [arrival, date, departure, dispatch]);
  console.log(isLoading, isError, routeDetails);
  return (
    <div className={styles.Right}>
      <SortingBar />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}

      {routeDetails.availableBuses &&
        routeDetails.availableBuses.length === 0 && <h1>No Bus Found.</h1>}

      {routeDetails.availableBuses &&
        routeDetails.availableBuses.map((item) => {
          return (
            <BusBox
              {...item}
              filledSeats={
                routeDetails.busIdWithBookedSeats[item._id.toString()]
              }
              routeDetails={routeDetails}
            />
          );
        })}
    </div>
  );
};

export default Right;
