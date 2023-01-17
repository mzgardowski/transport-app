import React from "react";
import DataTable from "react-data-table-component";
import AnimatedCustomBox from "src/components/AnimatedCustomBox/AnimatedCustomBox";
import BoxHeader from "../CustomBox/BoxHeader";
import useTrucksAndWorkers from "./utils/TrucksAndWorkers/useTrucksAndWorkers";

const TrucksAndWorkers = () => {
  const { columns, data } = useTrucksAndWorkers();
  return (
    <AnimatedCustomBox mx={1}>
      <BoxHeader>Trucks And Workers</BoxHeader>
      <DataTable columns={columns} data={data} />
    </AnimatedCustomBox>
  );
};

export default TrucksAndWorkers;
