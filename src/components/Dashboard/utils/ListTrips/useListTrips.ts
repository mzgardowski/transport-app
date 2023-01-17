import fetchLastTripsData from "./fetchLastTripsData";
import generateColumns from "./generateColumnsTrips";

const useListTrips = () => {
  const { columns } = generateColumns();
  const { data } = fetchLastTripsData();

  return { columns, data };
};

export default useListTrips;
