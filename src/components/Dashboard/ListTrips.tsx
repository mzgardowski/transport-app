import React from "react";
import DataTable from "react-data-table-component";
import AnimatedCustomBox from "src/components/AnimatedCustomBox/AnimatedCustomBox";
import BoxHeader from "../CustomBox/BoxHeader";
import useListTrips from "./utils/ListTrips/useListTrips";
import ExpandedComponent from "./utils/ListTrips/ExpandedComponent";

const ListTrips = () => {
  const { columns, data } = useListTrips();

  return (
    <AnimatedCustomBox mx={1}>
      <BoxHeader>Last Trips</BoxHeader>
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </AnimatedCustomBox>
  );
};

export default ListTrips;
