import React from "react";
import { Avatar } from "@mui/material";
import { TableColumn } from "react-data-table-component";

export interface ColumnsProps {
  id: number;
  photo: string;
  worker: string;
  startDate: string;
  endDate: string;
  destination: string;
}

const generateColumnsTrucksAndWorkers = () => {
  const columns: TableColumn<ColumnsProps>[] = [
    {
      name: "",
      selector: (row) => row.photo,
      cell: () => {
        return <Avatar sx={{ width: 26, height: 26 }} />;
      },
      width: "55px",
    },
    {
      name: "Worker",
      selector: (row) => row.worker,
    },
    {
      name: "Reserved date",
      selector: (row) => `${row.startDate} ${row.endDate}`,
    },
    { name: "Destination", selector: (row) => row.destination },
  ];
  return { columns };
};

export default generateColumnsTrucksAndWorkers;
