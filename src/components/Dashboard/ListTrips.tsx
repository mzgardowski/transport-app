import React from "react";
import DataTable from "react-data-table-component";
import CustomBox from "../CustomBox/CustomBox";
import BoxHeader from "../CustomBox/BoxHeader";
import useListTrips from "./utils/ListTrips/useListTrips";
import ExpandedComponent from "./utils/ListTrips/ExpandedComponent";

const ListTrips = () => {
  const { columns, data } = useListTrips();

  return (
    <CustomBox mx={1}>
      <BoxHeader>Last Trips</BoxHeader>
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </CustomBox>
  );
};

export default ListTrips;
