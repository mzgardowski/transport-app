import fetchTrucksAndWorkers from "./fetchLastTripsData";
import generateColumnsTrucksAndWorkers from "./generateColumnsTrucks";

const useTrucksAndWorkers = () => {
  const { columns } = generateColumnsTrucksAndWorkers();
  const { data } = fetchTrucksAndWorkers();

  return { columns, data };
};

export default useTrucksAndWorkers;
