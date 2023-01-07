import React from "react";
import { TableColumn } from "react-data-table-component";
import { Alert, AlertColor } from "@mui/material";

export interface ColumnsProps {
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

const generateColumns = () => {
  const columns: TableColumn<ColumnsProps>[] = [
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
  return { columns };
};

export default generateColumns;
