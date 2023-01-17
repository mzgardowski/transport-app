import React from "react";
import DataTable from "react-data-table-component";
import CustomBox from "../CustomBox/CustomBox";
import BoxHeader from "../CustomBox/BoxHeader";
import useTrucksAndWorkers from "./utils/TrucksAndWorkers/useTrucksAndWorkers";

const TrucksAndWorkers = () => {
  const { columns, data } = useTrucksAndWorkers();
  return (
    <CustomBox mx={1}>
      <BoxHeader>Trucks And Workers</BoxHeader>
      <DataTable columns={columns} data={data} />
    </CustomBox>
  );
};

export default TrucksAndWorkers;
