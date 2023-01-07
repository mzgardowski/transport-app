import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Alert, AlertColor } from "@mui/material";
import CustomBox from "../CustomBox/CustomBox";
import BoxHeader from "../CustomBox/BoxHeader";

interface ColumnsProps {
  id: number;
  title: string;
  date: string;
  tripTime: string;
  startingPoint: string;
  destination: string;
  client: string;
  worker: string;
  tripStatus: string;
}

const columns: TableColumn<ColumnsProps>[] = [
  {
    name: "id",
    selector: (row) => row.id,
    width: "50px",
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    cell: (row) => {
      const date = new Date(row.date);

      return (
        <div>{`${date.getDate().toString().padStart(2, "0")}-${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${date.getFullYear()}`}</div>
      );
    },
    sortable: true,
  },
  { name: "Trip time", selector: (row) => row.tripTime },
  {
    name: "Trip",
    selector: (row) => `${row.startingPoint} -> ${row.destination}`,
  },
  { name: "Client", selector: (row) => row.client },
  { name: "Worker", selector: (row) => row.worker },
  {
    name: "Trip status",
    selector: (row) => row.tripStatus,
    cell: (row) => {
      return (
        <Alert
          severity={`${row.tripStatus}` as AlertColor}
          sx={{
            padding: 1,
            ml: 1,
            "& .MuiAlert-icon": {
              margin: 0,
              padding: 0,
            },
          }}
        />
      );
    },
  },
];

const data = [
  {
    id: 1,
    title: "Elektronika",
    date: "12.06.2022",
    tripTime: "12h",
    startingPoint: "Wroclaw",
    destination: "Lodz",
    client: "RTV",
    worker: "Paweł",
    tripStatus: "error",
  },
  {
    id: 2,
    title: "Media",
    date: "12.02.2018",
    tripTime: "8h",
    startingPoint: "Warsaw",
    destination: "Wroclaw",
    client: "Media",
    worker: "Kamil",
    tripStatus: "warning",
  },
  {
    id: 3,
    title: "Budowlane",
    date: "01.22.2022",
    tripTime: "4h",
    startingPoint: "Warsaw",
    destination: "Wroclaw",
    client: "Kamikadze",
    worker: "Piotr",
    tripStatus: "info",
  },
  {
    id: 4,
    title: "Budowlane",
    date: "10.04.2023",
    tripTime: "20h",
    startingPoint: "Warsaw",
    destination: "Wroclaw",
    client: "TransBud",
    worker: "Mateusz",
    tripStatus: "success",
  },
  {
    id: 5,
    title: "Elektronika",
    date: "06.01.2022",
    tripTime: "72h",
    startingPoint: "Warsaw",
    destination: "Madryt",
    client: "Metaless",
    worker: "Tomek",
    tripStatus: "warning",
  },
];

const ListTrips = () => {
  return (
    <CustomBox mx={1}>
      <BoxHeader>Last Trips</BoxHeader>
      <DataTable columns={columns} data={data} />
    </CustomBox>
  );
};

export default ListTrips;
